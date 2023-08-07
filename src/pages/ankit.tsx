import ButtonView from "@/components/Button/Button.Component";

export default function Ankit() {
  const onBtnOneClicked = () => {
    console.log("Button One Clicked");
  };
  const onBtnTwoClicked = () => {
    console.log("Button Two Clicked");
  };
  const onBtnThreeClicked = () => {
    console.log("Button Three Clicked");
  };

  return (
    <div>
      <p>This is Ankit Component</p>
      <ButtonView label="Click Me 1" onClick={onBtnOneClicked} />
      <ButtonView label="Click Me 2" onClick={onBtnTwoClicked} />
      <ButtonView label="Click Me 3" onClick={onBtnThreeClicked} />
    </div>
  );
}
