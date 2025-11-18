interface ParagraphsProps {
  paragraphs: string[];
}
function Paragraphs({ paragraphs }: ParagraphsProps) {
  return (
    <div className="flex flex-col gap-5 text-left text-creme text-lg/loose md:text-xl/loose">
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
export default Paragraphs;