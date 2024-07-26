export default function TabButton({ children, onClick }) {
  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
}
