import Link from "next/link";
import {
    ArrowRight,
    Code2,
    Layers3,
    Eye,
    Rocket,
    Sparkles,
    WandSparkles,
} from "lucide-react";

import { ModeToggle } from "@/components/ui/mode-toggle";
import {
    ClerkProvider,
    Show,
    SignInButton,
    SignUpButton,
    UserButton,
} from "@clerk/nextjs";

const features = [
    {
        icon: Sparkles,
        title: "AI Generation",
        description: "Turn your ideas into working code.",
    },
    {
        icon: Layers3,
        title: "Modern Stack",
        description: "Build with modern web technologies.",
    },
    {
        icon: Eye,
        title: "Live Preview",
        description: "See your changes instantly.",
    },
    {
        icon: Rocket,
        title: "Build & Ship",
        description: "Go from idea to production faster.",
    },
];

export default function Home() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-zinc-50 text-zinc-950 dark:bg-[#05050a] dark:text-white">
            {/* Background gradients */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-1/2 top-[-300px] h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-violet-500/20 blur-[140px] dark:bg-violet-600/20" />

                <div className="absolute -left-40 top-1/3 h-[400px] w-[400px] rounded-full bg-blue-500/15 blur-[120px] dark:bg-blue-600/20" />

                <div className="absolute -right-40 top-1/2 h-[400px] w-[400px] rounded-full bg-fuchsia-500/15 blur-[120px] dark:bg-fuchsia-600/20" />

                {/* Grid */}
                <div
                    className="
            absolute inset-0
            bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)]
            bg-[size:40px_40px]
            dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)]
          "
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(250,250,250,0.7)_70%)] dark:bg-[radial-gradient(circle_at_center,transparent_0%,rgba(5,5,10,0.8)_75%)]" />
            </div>

            {/* Header */}
            <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
                <Link href="/" className="group flex items-center gap-2">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 shadow-lg shadow-violet-500/20 transition-transform group-hover:scale-105">
                        <Code2 className="h-5 w-5 text-white" />
                    </div>

                    <span className="text-lg font-semibold tracking-tight">
                        Code<span className="text-violet-500">Builder</span>
                    </span>
                </Link>

                <div className="flex items-center gap-2 sm:gap-3">
                    {/* Theme Toggle */}
                    <div
                        className="
            rounded-full border border-zinc-200/80
            bg-white/60 p-1 shadow-sm backdrop-blur-md
            dark:border-white/10 dark:bg-white/[0.04]
        "
                    >
                        <ModeToggle />
                    </div>

                    {/* Authentication */}
                    <Show when="signed-out">
                        <SignInButton>
                            <button
                                className="
                    hidden h-10 items-center justify-center
                    rounded-full border border-zinc-200
                    bg-white/60 px-4 text-sm font-medium
                    text-zinc-700 backdrop-blur-md
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:bg-white hover:shadow-md
                    sm:inline-flex
                    dark:border-white/10
                    dark:bg-white/[0.04]
                    dark:text-zinc-200
                    dark:hover:bg-white/[0.08]
                "
                            >
                                Sign In
                            </button>
                        </SignInButton>

                        <SignUpButton>
                            <button
                                className="
                    group relative inline-flex h-10
                    items-center justify-center
                    overflow-hidden rounded-full
                    bg-gradient-to-r
                    from-violet-600 via-purple-600 to-blue-600
                    px-4 text-sm font-semibold text-white
                    shadow-lg shadow-violet-500/20
                    transition-all duration-200
                    hover:-translate-y-0.5
                    hover:shadow-xl
                    hover:shadow-violet-500/30
                    sm:h-11 sm:px-5
                "
                            >
                                <span className="relative z-10 flex items-center gap-1.5">
                                    Get Started
                                    <ArrowRight
                                        className="
                            h-4 w-4
                            transition-transform duration-200
                            group-hover:translate-x-1
                        "
                                    />
                                </span>

                                {/* Shine effect */}
                                <span
                                    className="
                        absolute inset-0
                        -translate-x-full
                        bg-gradient-to-r
                        from-transparent
                        via-white/20
                        to-transparent
                        transition-transform duration-500
                        group-hover:translate-x-full
                    "
                                />
                            </button>
                        </SignUpButton>
                    </Show>

                    {/* User */}
                    <Show when="signed-in">
                        <div
                            className="
                rounded-full border border-zinc-200/80
                bg-white/60 p-1 shadow-sm backdrop-blur-md
                dark:border-white/10
                dark:bg-white/[0.04]
            "
                        >
                            <UserButton
                                appearance={{
                                    elements: {
                                        avatarBox: "h-9 w-9 sm:h-10 sm:w-10",
                                    },
                                }}
                            />
                        </div>
                    </Show>
                </div>
            </header>

            {/* Hero */}
            <section className="relative z-10 mx-auto flex min-h-[calc(100vh-85px)] max-w-7xl flex-col items-center px-6 pt-16 text-center lg:px-8 lg:pt-24">
                {/* Badge */}
                <div
                    className="
            mb-7 inline-flex items-center gap-2 rounded-full
            border border-violet-500/20 bg-violet-500/5
            px-4 py-2 text-sm font-medium text-violet-600
            backdrop-blur-sm
            dark:border-violet-400/20 dark:bg-violet-500/10 dark:text-violet-300
          "
                >
                    <WandSparkles className="h-4 w-4" />
                    AI-Powered Development
                    <span className="ml-1 h-1.5 w-1.5 rounded-full bg-violet-500" />
                </div>

                {/* Heading */}
                <h1 className="max-w-5xl text-5xl font-bold tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-8xl">
                    Build your ideas
                    <br />
                    <span className="bg-gradient-to-r from-blue-500 via-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
                        with AI.
                    </span>
                </h1>

                {/* Description */}
                <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg dark:text-zinc-400">
                    Describe what you want to build and let Code Builder turn
                    your idea into a modern web application. Generate, edit,
                    preview, and ship — all in one place.
                </p>

                {/* CTA */}
                <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
                    <Link
                        href="/builder"
                        className="
              group inline-flex h-12 items-center justify-center gap-2
              rounded-xl bg-gradient-to-r from-violet-600 to-blue-600
              px-6 text-sm font-semibold text-white
              shadow-xl shadow-violet-500/20
              transition-all duration-200
              hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-violet-500/30
            "
                    >
                        Start Building
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Features */}
                <div className="mt-16 grid w-full max-w-4xl grid-cols-2 gap-3 md:grid-cols-4">
                    {features.map((feature) => {
                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="
                  group rounded-2xl border border-zinc-200/80
                  bg-white/40 p-4 backdrop-blur-sm
                  transition duration-300
                  hover:-translate-y-1 hover:border-violet-500/30
                  hover:bg-white/70
                  dark:border-white/[0.08]
                  dark:bg-white/[0.025]
                  dark:hover:border-violet-500/30
                  dark:hover:bg-white/[0.05]
                "
                            >
                                <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/15 to-blue-500/15 text-violet-500 transition group-hover:scale-110">
                                    <Icon className="h-5 w-5" />
                                </div>

                                <h3 className="text-sm font-semibold">
                                    {feature.title}
                                </h3>

                                <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-500">
                                    {feature.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                {/* Editor Preview */}
                <div className="relative mt-16 w-full max-w-5xl pb-16">
                    {/* Glow */}
                    <div className="absolute left-1/2 top-1/2 h-64 w-2/3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[100px]" />

                    <div
                        className="
              relative overflow-hidden rounded-2xl
              border border-zinc-200/80
              bg-white/80 text-left shadow-2xl
              shadow-violet-500/10 backdrop-blur-xl
              dark:border-white/10 dark:bg-[#0c0c12]/90
            "
                    >
                        {/* Window header */}
                        <div className="flex h-12 items-center justify-between border-b border-zinc-200 px-4 dark:border-white/10">
                            <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full bg-red-400" />
                                <span className="h-3 w-3 rounded-full bg-yellow-400" />
                                <span className="h-3 w-3 rounded-full bg-green-400" />
                            </div>

                            <div className="hidden items-center gap-1 rounded-lg bg-zinc-100 p-1 text-xs dark:bg-white/5 sm:flex">
                                <span className="rounded-md bg-white px-3 py-1 font-medium shadow-sm dark:bg-white/10">
                                    Preview
                                </span>
                                <span className="px-3 py-1 text-zinc-500">
                                    Code
                                </span>
                            </div>

                            <div className="h-6 w-20 rounded-md bg-zinc-100 dark:bg-white/5" />
                        </div>

                        {/* Editor */}
                        <div className="grid min-h-[300px] md:grid-cols-2">
                            {/* Code */}
                            <div className="hidden border-r border-white/10 bg-[#09090d] p-6 font-mono text-sm leading-7 md:block">
                                <div className="mb-4 text-xs text-zinc-500">
                                    app/page.tsx
                                </div>

                                <div className="text-zinc-500">
                                    <span className="text-zinc-600">1</span>{" "}
                                    <span className="text-pink-400">
                                        export default
                                    </span>{" "}
                                    <span className="text-blue-400">
                                        function
                                    </span>{" "}
                                    <span className="text-yellow-300">
                                        Home
                                    </span>
                                    <span className="text-zinc-300">
                                        () {"{"}
                                    </span>
                                </div>

                                <div className="text-zinc-500">
                                    <span className="text-zinc-600">2</span>{" "}
                                    <span className="text-zinc-300">
                                        return (
                                    </span>
                                </div>

                                <div className="text-zinc-500">
                                    <span className="text-zinc-600">3</span>{" "}
                                    <span className="text-zinc-300">&lt;</span>
                                    <span className="text-red-300">main</span>
                                </div>

                                <div className="pl-8 text-zinc-500">
                                    <span className="text-zinc-600">4</span>{" "}
                                    <span className="text-purple-300">
                                        className
                                    </span>
                                    <span className="text-zinc-300">=</span>
                                    <span className="text-green-300">
                                        &quot;min-h-screen&quot;
                                    </span>
                                </div>

                                <div className="text-zinc-500">
                                    <span className="text-zinc-600">5</span>{" "}
                                    <span className="text-zinc-300">&gt;</span>
                                </div>

                                <div className="pl-8 text-zinc-500">
                                    <span className="text-zinc-600">6</span>{" "}
                                    <span className="text-zinc-300">&lt;</span>
                                    <span className="text-red-300">h1</span>
                                    <span className="text-zinc-300">&gt;</span>
                                </div>

                                <div className="pl-12 text-zinc-300">
                                    <span className="text-zinc-600">7</span>{" "}
                                    Build something amazing
                                </div>

                                <div className="pl-8 text-zinc-500">
                                    <span className="text-zinc-600">8</span>{" "}
                                    <span className="text-zinc-300">&lt;/</span>
                                    <span className="text-red-300">h1</span>
                                    <span className="text-zinc-300">&gt;</span>
                                </div>

                                <div className="text-zinc-500">
                                    <span className="text-zinc-600">9</span>{" "}
                                    <span className="text-zinc-300">&lt;/</span>
                                    <span className="text-red-300">main</span>
                                    <span className="text-zinc-300">&gt;</span>
                                </div>
                            </div>

                            {/* Preview */}
                            <div className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-gradient-to-br from-violet-50 via-white to-blue-50 p-8 dark:from-violet-950/30 dark:via-[#0c0c12] dark:to-blue-950/30">
                                <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />

                                <div className="relative w-full max-w-sm rounded-2xl border border-zinc-200 bg-white p-6 shadow-xl dark:border-white/10 dark:bg-zinc-900">
                                    <div className="mb-6 flex items-center justify-between">
                                        <div className="h-3 w-24 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500" />
                                    </div>

                                    <h3 className="text-xl font-bold tracking-tight">
                                        Build anything
                                        <br />
                                        <span className="text-violet-500">
                                            with AI.
                                        </span>
                                    </h3>

                                    <div className="mt-5 space-y-3">
                                        <div className="h-2 w-full rounded-full bg-zinc-100 dark:bg-zinc-800" />
                                        <div className="h-2 w-4/5 rounded-full bg-zinc-100 dark:bg-zinc-800" />
                                    </div>

                                    <button className="mt-6 rounded-lg bg-zinc-950 px-4 py-2 text-xs font-semibold text-white dark:bg-white dark:text-black">
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
