type propsType = {
  title: string;
};

function Title({ title }: propsType) {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
}

export default Title;
