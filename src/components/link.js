/** @format */

import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const LinkRouter = ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || "";
  if (router.pathname === href) {
    className = `${className} selected`;
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>;
};

export default LinkRouter;
