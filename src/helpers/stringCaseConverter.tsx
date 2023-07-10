interface Cases {
  cases?: "uppercase" | "lowercase" | "sentencecase";
}

const toSentenceCase = (str: string) => {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};

const stringCaseConverter = (str: string, cases: "uppercase" | "lowercase" | "sentencecase") => {
  switch (cases) {
    case "uppercase":
      return str.toUpperCase();

    case "lowercase":
      return str.toLowerCase();

    case "sentencecase":
      return toSentenceCase(str);
  }
};

export default stringCaseConverter;
