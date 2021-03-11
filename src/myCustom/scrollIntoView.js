const scrollIntoView = (ref, sectionId) => {

  const nodes = [...ref.current.childNodes];
  let node = nodes.filter((v) => v.id === sectionId)[0];

  if (node) {
    const y = node.offsetTop;

    window.scroll({
      top: y,
      behavior: "smooth",
    });
  }
};

export default scrollIntoView;
