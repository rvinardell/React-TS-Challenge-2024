const CustomTag: React.FC<{ text: string; visible?: boolean }> = ({
  text,
  visible = true,
}) => {
  return (
    <div className="flex items-center">
      <p
        className={`bg-pageBg p-2 text-lg text-blueText ${
          visible ? "" : "invisible"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

export default CustomTag;
