import { motion } from "framer-motion";

const MarketEve = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      style={{
        fontFamily: "Times New Roman",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        textAlign: "center",
        backgroundColor: "black",
        color: "white",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
        overflow: "hidden",
        width: "300px",
        height: "320px", // ✅ Fixed height to match other cards
        margin: "40px auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
      }}
    >
      <motion.img
        src="/images/Services/S7.jpg"
        alt="Marketing Events"
        style={{
          width: "100%",
          height: "150px",
          objectFit: "cover",
          borderRadius: "10px",
          transition: "transform 0.3s ease-in-out",
        }}
        whileHover={{ scale: 1.2 }}
      />
      <h3 style={{ margin: "10px 0", fontSize: "16px" }}>Marketing Events</h3>
      <p style={{
        fontSize: "14px",
        color: "#ccc",
        flexGrow: 1,
        margin: "0px 10px"
      }}>
        Promoting brands with impactful strategies.
      </p>
      <button style={{
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        padding: "8px 12px",
        borderRadius: "5px",
        cursor: "pointer",
        fontSize: "14px",
        marginTop: "10px"
      }}>Learn More &gt;&gt;</button>
    </motion.div>
  );
};

export default MarketEve;
