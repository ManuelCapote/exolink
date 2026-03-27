export default function Discount({ screen, value }) {
  if (!value) return <div></div>
  return <div className={`discount ${screen}`}>{value}</div>
}
