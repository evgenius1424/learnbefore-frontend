import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card.tsx";
import { AppShell } from "@/components/app/app-shell.tsx";
import { Input } from "@/components/ui/input.tsx";
import { Button } from "@/components/ui/button.tsx";

interface Word {
  name: string;
  explanation: string;
}

interface ResponseMessage {
  words: Word[];
}

export const ChatPage: React.FC = () => {
  const [messages, setMessages] = useState<(ResponseMessage | string)[]>([]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      const words = inputValue.trim().split(/\s+/);
      const responseWords: Word[] = words.map(word => ({
        name: word,
        explanation: `${word} has some explanation`,
      }));
      const responseMessage: ResponseMessage = {
        words: responseWords,
      };

      setMessages([...messages, inputValue, responseMessage]);
      setInputValue('');
    }
  };

  return (
    <AppShell>
      <main className="relative h-full w-full flex-1 overflow-auto transition-width">
        <div className="container flex flex-col h-[80vh] rounded-lg mx-auto">
          <div className="space-y-4 p-4 overflow-y-auto">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-3xl font-semibold text-gray-800 mb-4">Welcome to Learnbefore</h1>
                <p className="text-lg text-center text-gray-500 mb-8">Start discovering new words by typing in the input field below!</p>
              </div>
            ) : (
              messages.map((message, index) => {
                if (typeof message === 'string') {
                  return (
                    <div key={index} className="flex items-start gap-2 w-full">
                      <div className="w-full rounded-lg bg-zinc-200 dark:bg-zinc-700 p-2 text-left">
                        <p className="text-sm">{message}</p>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <div key={index} className="flex flex-wrap gap-2 justify-center w-full">
                      {message.words.map((word, wordIndex) => (
                        <Card key={wordIndex} className="bg-white shadow rounded-lg p-4">
                          <CardContent>
                            <div className="flex items-center space-x-4">
                              <div>
                                <p className="text-2xl text-center font-semibold text-gray-800">{word.name}</p>
                                <p className="text-sm text-center text-gray-500">{word.explanation}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                        ))}
                    </div>
                    )
                }
              })
              )}
          </div>
        </div>
      </main>
      <footer className="border-t dark:border-zinc-700 p-4">
        <form onSubmit={handleSend}>
          <div className="flex items-center gap-2">
            <Input
              className="flex-1"
              placeholder="Type text to find words to learn..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <Button type="submit">Send</Button>
          </div>
        </form>
      </footer>
    </AppShell>
    );
};
