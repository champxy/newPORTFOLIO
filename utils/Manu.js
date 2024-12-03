export const Highlight = (text) => {
    const highlightedText = text.split('Manchester United').map((part, index) => {
      if (index !== 0) {
        return (
          <>
            <span className="text-red-700 font-bold">Manchester United</span>
            {part}
          </>
        );
      }
      return part;
    });
    return highlightedText;
  }