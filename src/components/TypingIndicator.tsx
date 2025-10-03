export const TypingIndicator = () => {
  return (
    <div className="flex justify-start mb-4">
      <div className="bg-botMessage text-botMessage-foreground rounded-2xl rounded-tl-none px-4 py-3 shadow-sm">
        <div className="typing-indicator flex gap-1">
          <span className="w-2 h-2 bg-botMessage-foreground rounded-full opacity-70"></span>
          <span className="w-2 h-2 bg-botMessage-foreground rounded-full opacity-70"></span>
          <span className="w-2 h-2 bg-botMessage-foreground rounded-full opacity-70"></span>
        </div>
      </div>
    </div>
  );
};
