import { HTMLAttributes, FC, JSXElementConstructor } from "react";

interface PageHeaderProps extends HTMLAttributes<HTMLHeadingElement> {
  size?: 1 | 2 | 3 | 4 | 5 | 6;
}

export const PageHeader: FC<PageHeaderProps> = ({
  children,
  size = 1,
  ...rest
}) => {
  const HeadingTag = `h${size}` as unknown as JSXElementConstructor<
    HTMLAttributes<HTMLHeadingElement>
  >;

  return <HeadingTag {...rest}>{children}</HeadingTag>;
};
