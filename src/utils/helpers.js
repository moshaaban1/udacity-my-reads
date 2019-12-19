export const upperCaseSplit = (str, textTransform) => {
   var originalStr = str
      .split(/(?=[A-Z])/)
      .join(" ")
      .toLowerCase();
   if (textTransform === "uppercase") return originalStr.toUppercase();
   else if (textTransform === "lowercase") return originalStr;
   else return originalStr.charAt(0).toUpperCase() + originalStr.slice(1);
};
