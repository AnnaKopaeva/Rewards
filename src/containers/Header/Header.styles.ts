const styles = {
  header: { display: "flex", alignItems: "center" },
  avatar: { display: "flex", flexDirection: "column", alignItems: "center", mr: 8 },
  name: { fontSize: "16px", mt: 1, minWidth: "115px", minHeight: "24px" },
  details: { display: "flex", flexDirection: "row" },
  block: { mr: 10 },
  count: { fontSize: "20px", fontWeight: 500 },
} as const;

export default styles;
