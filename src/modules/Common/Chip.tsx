"use client";

const Chip = (props: any) => {
  const { status, type } = props;
  if (status && type) {
    return (
      <div className={`${type} text-white px-2 py-1 flex items-center justify-center rounded-md uppercase`}>
        {status}
      </div>
    );
  } else return null;
};

export default Chip;
