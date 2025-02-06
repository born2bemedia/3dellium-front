export const renderBlock = (block, index) => {
  switch (block.type) {
    case "paragraph":
      return (
        <p key={index} style={{ fontSize: "16px", marginBottom: "16px" }}>
          {block.children.map((child, i) =>
            child.format === 1 ? (
              <strong key={i}>{child.text}</strong>
            ) : (
              child.text
            )
          )}
        </p>
      );
    case "heading":
      return (
        <h2
          key={index}
          style={{
            fontSize: "24px",
            fontWeight: "600",
            marginBottom: "16px",
            marginTop: "36px",
          }}
        >
          {block.children.map((child) => child.text).join(" ")}
        </h2>
      );
    case "list":
      return (
        <ul key={index} style={{ marginBottom: "16px", paddingLeft: "20px" }}>
          {block.children.map((item, i) => (
            <li key={i} style={{ marginBottom: "8px" }}>
              {item.children.map((child) => child.text).join(" ")}
            </li>
          ))}
        </ul>
      );
    default:
      return null;
  }
};
