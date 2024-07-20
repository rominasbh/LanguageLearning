import _ from 'lodash';
import { useContext, useEffect, useState, useCallback, useRef } from "react";
import { LearningContext } from "../App";
import PersonaClientSDK from "@sindarin/persona";
import personaConfig from '../persona/index';

const PersonaComponent = ({ }) => {
  console.log('rendering PersonaComponent');
  const [personaClient, setPersonaClient] = useState(null);
  const [isClientLoaded, setClientLoaded] = useState(false);
  const { 
    feedback, 
    setFeedback, 
    question, 
    setQuestion, 
    example, 
    setExample, 
    learningUpdate, 
    setLearningUpdate, 
    isPersonaClientStarted 
  } = useContext(LearningContext);

  const actionHandlerRef = useRef(null);
  const initCalledRef = useRef(false);

  const initPersonaClient = useCallback(async () => {
    if (initCalledRef.current) return;
    initCalledRef.current = true;

    console.log("init persona client");
    const apiKey = "c1ecfbb4-3527-4546-9e90-26f6b1e3974b";
    const client = new PersonaClientSDK(apiKey);
    setPersonaClient(client);

    try {
      await client.init({
        userId: '123',
        personaConfig,
        options: {
          streamTranscripts: true,
          shouldNotSaveConversation: false
        }
      });
      console.log("personaClient initialized");
      setClientLoaded(true);
    } catch (error) {
      console.error("Error initializing personaClient:", error);
    }
  }, []);

  // useEffect(() => {
  //   if (init && !isClientLoaded) {
  //     initPersonaClient();
  //   }
  // }, [init, isClientLoaded, initPersonaClient]);

  

  useEffect(() => {
    console.log('IS CLIENT LOADED', isClientLoaded)
    console.log('isPersonaClientStarted', isPersonaClientStarted)
    if (isPersonaClientStarted && !isClientLoaded) {
      initPersonaClient();
    }
  }, [isPersonaClientStarted, isClientLoaded, initPersonaClient]);

  const handleAction = useCallback((action) => {
    console.log('actions emitted', action);

    if (_.has(action, 'mark_answer_correct_or_incorrect')) {
      console.log('action.mark_answer_correct_or_incorrect', action.mark_answer_correct_or_incorrect)

      const object = {
        feedback_type: action.mark_answer_correct_or_incorrect ? 'positive' : 'negative'
      }

      setFeedback(object);
    }

    if (action.ask_question) {
      setQuestion(action.ask_question);
    }

    if (action.provide_example) {
      setExample(action.provide_example);
    }

    if (action.update_learning) {
      setLearningUpdate(action.update_learning);
    }
  }, [setFeedback, setQuestion, setExample, setLearningUpdate]);

  useEffect(() => {
    if (isClientLoaded && !actionHandlerRef.current) {
      actionHandlerRef.current = handleAction;
      personaClient.on("action", actionHandlerRef.current);
    }
  }, [isClientLoaded, handleAction, personaClient]);

  return null;
}

export default PersonaComponent;