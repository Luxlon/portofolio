import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "../components/ui/glowing-effect";
import Spline from '@splinetool/react-spline/next';

export function GlowingEffectDemoSecond() {
    const items = [
        {
            area: "md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]",
            icon: <Box className="h-4 w-4 text-black dark:text-neutral-400" />,
            title: "Build IoT Device",
            description: "Create IoT device with realtime capabilities.",
            scene: "https://prod.spline.design/ePFXKbLk95f3d2oA/scene.splinecode"
        },
        {
            area: "md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]",
            icon: <Settings className="h-4 w-4 text-black dark:text-neutral-400" />,
            title: "AI & Machine Learning",
            description: "Develop intelligent applications.",
            // scene: "https://prod.spline.design/vS2eNMSCNWX3Txdd/scene.splinecode"
            scene: "https://prod.spline.design/lpBtYgg1V0gT7PeO/scene.splinecode"
        },
        {
            area: "md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]",
            icon: <Lock className="h-4 w-4 text-black dark:text-neutral-400" />,
            title: "Mobile Development",
            description: "Build apps with modern style",
            scene: "https://prod.spline.design/OlB0j9NKFYVuWRil/scene.splinecode"
        },
        {
            area: "md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]",
            icon: <Sparkles className="h-4 w-4 text-black dark:text-neutral-400" />,
            title: "Web Development",
            description: "Build responsive websites with modern design.",
            scene: "https://prod.spline.design/g7DdaCJbkpqiUUUU/scene.splinecode"
        },
        {
            area: "md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]",
            icon: <Search className="h-4 w-4 text-black dark:text-neutral-400" />,
            title: "3D Design",
            description: "Create stunning 3D visuals.",
            scene: "https://prod.spline.design/84olqcNFZpy5qgXY/scene.splinecode"
        }
    ];

    return (
        <div className="w-full overflow-x-hidden bg-[#111] px-6 md:px-12 lg:px-20 py-12">
            {/* Title */}
            <h2 className="text-3xl font-bold text-white text-center mb-10">
                My Service
            </h2>

            {/* Grid */}
            <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[34rem] xl:grid-rows-2 box-border">
                {items.map((item, index) => (
                    <GridItem key={index} {...item} />
                ))}
            </ul>
        </div>
    );
}

interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
    scene: string;
}

const GridItem = ({ area, icon, title, description, scene }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3 overflow-hidden">
                <GlowingEffect
                    blur={0}
                    borderWidth={3}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />

                {/* Spline sebagai background */}
                <div className="absolute inset-0">
                    <Spline scene={scene} />
                </div>

                {/* Overlay gelap */}
                <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />

                {/* Konten teks */}
                <div className="relative z-20 p-6 flex flex-col gap-3 h-full justify-between">
                    <div className="w-fit rounded-lg border border-gray-600 p-2 pointer-events-none">
                        {icon}
                    </div>
                    <div className="space-y-3 pointer-events-auto">
                        <h3 className="font-sans text-xl font-semibold text-white">
                            {title}
                        </h3>
                        <h2 className="font-sans text-sm text-neutral-200">
                            {description}
                        </h2>
                    </div>
                </div>
            </div>
        </li>
    );
};
