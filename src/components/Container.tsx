import clsx from "clsx";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <div className={
    clsx(
      "max-w-4xl mx-auto h-auto", className,
    )
  }>{children}</div>;
};

export default Container;
