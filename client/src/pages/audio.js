import React, { useState, useRef } from 'react';

const AudioRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const audioChunks = [];
  const mediaRecorderRef = useRef(null);

  const handleStartRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.addEventListener('dataavailable', (event) => {
      audioChunks.push(event.data);
    });
    mediaRecorderRef.current.start();
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    mediaRecorderRef.current.stop();
    setAudioBlob(new Blob(audioChunks));
    setIsRecording(false);
  };

  return (
    <div>
      {isRecording ? (
        <button onClick={handleStopRecording}>Stop Recording</button>
      ) : (
        <button onClick={handleStartRecording}>Start Recording</button>
      )}
      {audioBlob ? (
        <audio controls src={URL.createObjectURL(audioBlob)} />
      ) : null}
    </div>
  );
};

export default AudioRecorder;
