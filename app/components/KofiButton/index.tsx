import KofiButton from "kofi-button";
interface KofiProps {
  color: string;
}

export const StyledKofiButton = (props: KofiProps) => {
  const { color } = props;
  
  return (
    <div className="kofi-btn">
      <KofiButton color={color} title="Buy me a coffee" kofiID="davisgreg1" />
    </div>
  );
};
