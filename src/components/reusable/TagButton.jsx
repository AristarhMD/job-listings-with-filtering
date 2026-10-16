export default function TagButton({ children, style, onPress }) {
  return (
    <button className={style} onClick={onPress} data-value={children}>
      {children}
    </button>
  );
}
