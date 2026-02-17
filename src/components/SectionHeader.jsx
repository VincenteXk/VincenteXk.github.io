export default function SectionHeader({ icon, label, className = '' }) {
    return (
        <div className={`flex items-center gap-3 ${className}`.trim()}>
            {icon}
            <span className="section-label">{label}</span>
        </div>
    )
}
