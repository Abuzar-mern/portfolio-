"use client"

interface FloatingSkillBadgesProps {
  skills: string[]
}

export function FloatingSkillBadges({ skills }: FloatingSkillBadgesProps) {
  const positions = [
    { top: "10%", left: "-5%", delay: 0 },
    { top: "20%", right: "5%", delay: 0.5 },
    { top: "60%", right: "-3%", delay: 1 },
    { bottom: "15%", left: "5%", delay: 0.3 },
  ];

  return (
    <div className="relative w-full h-full">
      {skills.slice(0, 4).map((skill, index) => (
        <div
          key={skill}
          className="absolute"
          style={{
            top: positions[index].top,
            left: positions[index].left,
            right: positions[index].right,
            animation: `float 3s ease-in-out infinite`,
            animationDelay: `${positions[index].delay}s`,
          }}
        >
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 text-sm font-semibold text-white shadow-lg hover:bg-white/20 transition-all duration-300">
            {skill}
          </div>
        </div>
      ))}
    </div>
  );
}
