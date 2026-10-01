"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import {
  GitBranch,
  Users,
  ExternalLink,
  Code2,
  FolderGit2,
  Gamepad2,
  RotateCcw,
  Bot,
  UserCheck,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SkillIcon } from "../Skills/SkillIcon";

interface GithubStatsData {
  public_repos: number;
  followers: number;
  html_url: string;
  name?: string;
  bio?: string;
  avatar_url?: string;
  login: string;
}

interface GithubStatsResponse {
  profile: GithubStatsData | null;
  topLanguages: string[];
  error?: string;
}

/* NEUMORPHISM HOVER UTILITY CLASS */
const NEUMORPHIC_CARD_CLASSES =
  "relative flex flex-col justify-between rounded-3xl border border-border/40 bg-bg/60 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[-6px_-6px_14px_rgba(255,255,255,0.03),6px_6px_18px_rgba(0,0,0,0.6),inset_1px_1px_2px_rgba(255,255,255,0.08)]";

/* INTERACTIVE / AUTOPLAY SNAKE GAME */
const GRID_COLS = 28;
const GRID_ROWS = 5; // Reduced grid rows to shrink total height
const GAME_SPEED = 180;

type Position = { x: number; y: number };
type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";

function InteractiveSnakeBox() {
  const [snake, setSnake] = useState<Position[]>([
    { x: 4, y: 2 },
    { x: 3, y: 2 },
    { x: 2, y: 2 },
  ]);
  const [food, setFood] = useState<Position>({ x: 20, y: 2 });
  const [dir, setDir] = useState<Direction>("RIGHT");
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const snakeRef = useRef(snake);
  snakeRef.current = snake;

  const foodRef = useRef(food);
  foodRef.current = food;

  const dirRef = useRef<Direction>(dir);
  dirRef.current = dir;

  const spawnFood = useCallback((currentSnake: Position[]) => {
    while (true) {
      const rx = Math.floor(Math.random() * GRID_COLS);
      const ry = Math.floor(Math.random() * GRID_ROWS);
      if (!currentSnake.some((s) => s.x === rx && s.y === ry)) {
        return { x: rx, y: ry };
      }
    }
  }, []);

  const resetGame = () => {
    const initialSnake = [
      { x: 4, y: 2 },
      { x: 3, y: 2 },
      { x: 2, y: 2 },
    ];
    setSnake(initialSnake);
    setDir("RIGHT");
    setFood(spawnFood(initialSnake));
    setScore(0);
    setIsGameOver(false);
  };

  const changeDirection = useCallback((newDir: Direction) => {
    const current = dirRef.current;
    if (newDir === "UP" && current !== "DOWN") setDir("UP");
    if (newDir === "DOWN" && current !== "UP") setDir("DOWN");
    if (newDir === "LEFT" && current !== "RIGHT") setDir("LEFT");
    if (newDir === "RIGHT" && current !== "LEFT") setDir("RIGHT");
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isAutoPlay || isGameOver) return;
      if (
        ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "w", "a", "s", "d"].includes(
          e.key
        )
      ) {
        e.preventDefault();
      }
      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          changeDirection("UP");
          break;
        case "ArrowDown":
        case "s":
        case "S":
          changeDirection("DOWN");
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          changeDirection("LEFT");
          break;
        case "ArrowRight":
        case "d":
        case "D":
          changeDirection("RIGHT");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAutoPlay, isGameOver, changeDirection]);

  useEffect(() => {
    if (isGameOver) return;

    const interval = setInterval(() => {
      const currentSnake = snakeRef.current;
      const currentFood = foodRef.current;
      const head = { ...currentSnake[0] };

      let nextPos: Position;

      if (isAutoPlay) {
        let dx = currentFood.x - head.x;
        let dy = currentFood.y - head.y;

        const candidates: Position[] = [];
        if (dx !== 0) candidates.push({ x: head.x + Math.sign(dx), y: head.y });
        if (dy !== 0) candidates.push({ x: head.x, y: head.y + Math.sign(dy) });

        const allMoves: Position[] = [
          { x: head.x + 1, y: head.y },
          { x: head.x - 1, y: head.y },
          { x: head.x, y: head.y + 1 },
          { x: head.x, y: head.y - 1 },
        ];

        const isValid = (pos: Position) =>
          pos.x >= 0 &&
          pos.x < GRID_COLS &&
          pos.y >= 0 &&
          pos.y < GRID_ROWS &&
          !currentSnake.some((s) => s.x === pos.x && s.y === pos.y);

        let chosen = candidates.find(isValid) || allMoves.find(isValid);

        if (!chosen) {
          resetGame();
          return;
        }
        nextPos = chosen;
      } else {
        switch (dirRef.current) {
          case "UP":
            head.y -= 1;
            break;
          case "DOWN":
            head.y += 1;
            break;
          case "LEFT":
            head.x -= 1;
            break;
          case "RIGHT":
            head.x += 1;
            break;
        }
        nextPos = head;

        if (
          nextPos.x < 0 ||
          nextPos.x >= GRID_COLS ||
          nextPos.y < 0 ||
          nextPos.y >= GRID_ROWS ||
          currentSnake.some((s) => s.x === nextPos.x && s.y === nextPos.y)
        ) {
          setIsGameOver(true);
          return;
        }
      }

      const newSnake = [nextPos, ...currentSnake];

      if (nextPos.x === currentFood.x && nextPos.y === currentFood.y) {
        setScore((s) => s + 1);
        setFood(spawnFood(newSnake));
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    }, GAME_SPEED);

    return () => clearInterval(interval);
  }, [isAutoPlay, isGameOver, spawnFood]);

  return (
    <div className={`${NEUMORPHIC_CARD_CLASSES} p-4`}>
      <div>
        <div className="mb-2 flex items-center justify-between border-b border-border/40 pb-2">
          <div className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-wider text-lamp">
            <Gamepad2 size={15} />
            <span>Commit Snake</span>
          </div>

          <button
            onClick={() => {
              setIsAutoPlay(!isAutoPlay);
              if (isGameOver) resetGame();
            }}
            className="flex items-center gap-1.5 rounded-full border border-border/60 bg-surface/60 px-2.5 py-0.5 font-mono text-[10px] text-muted transition-all hover:border-lamp/50 hover:text-lamp active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]"
          >
            {isAutoPlay ? <Bot size={11} /> : <UserCheck size={11} />}
            <span>{isAutoPlay ? "Auto-Pilot" : "Manual"}</span>
          </button>
        </div>

        {/* Full-width Compact Grid */}
        <div className="relative w-full py-0.5">
          <div
            className="grid gap-1 w-full"
            style={{
              gridTemplateColumns: `repeat(${GRID_COLS}, minmax(0, 1fr))`,
            }}
          >
            {Array.from({ length: GRID_ROWS * GRID_COLS }).map((_, idx) => {
              const x = idx % GRID_COLS;
              const y = Math.floor(idx / GRID_COLS);

              const isHead = snake[0].x === x && snake[0].y === y;
              const isBody = snake.slice(1).some((s) => s.x === x && s.y === y);
              const isFoodItem = food.x === x && food.y === y;

              return (
                <div
                  key={idx}
                  className={`aspect-square w-full rounded-[2px] transition-all duration-150 ${
                    isHead
                      ? "bg-lamp shadow-[0_0_6px_rgba(232,163,64,1)] scale-105 z-10"
                      : isBody
                      ? "bg-lamp/70"
                      : isFoodItem
                      ? "bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)] animate-pulse"
                      : "bg-surface/50"
                  }`}
                />
              );
            })}
          </div>

          {isGameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-xl bg-bg/90 backdrop-blur-xs">
              <p className="font-mono text-[11px] font-semibold text-ink mb-1">
                Game Over!
              </p>
              <button
                onClick={resetGame}
                className="flex items-center gap-1 rounded-full bg-lamp px-2.5 py-0.5 text-[10px] font-semibold text-bg transition-transform hover:scale-105"
              >
                <RotateCcw size={10} />
                <span>Retry</span>
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-2 flex items-center justify-between font-mono text-[10px] text-muted">
        <div>
          <span>Score: </span>
          <strong className="text-lamp text-xs">{score}</strong>
        </div>

        {!isAutoPlay && (
          <div className="flex items-center gap-0.5">
            <button
              onClick={() => changeDirection("LEFT")}
              className="rounded bg-surface p-0.5 hover:text-lamp border border-border/40 active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8)]"
            >
              <ChevronLeft size={10} />
            </button>
            <div className="flex flex-col gap-0.5">
              <button
                onClick={() => changeDirection("UP")}
                className="rounded bg-surface p-0.5 hover:text-lamp border border-border/40 active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8)]"
              >
                <ChevronUp size={10} />
              </button>
              <button
                onClick={() => changeDirection("DOWN")}
                className="rounded bg-surface p-0.5 hover:text-lamp border border-border/40 active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8)]"
              >
                <ChevronDown size={10} />
              </button>
            </div>
            <button
              onClick={() => changeDirection("RIGHT")}
              className="rounded bg-surface p-0.5 hover:text-lamp border border-border/40 active:shadow-[inset_1px_1px_2px_rgba(0,0,0,0.8)]"
            >
              <ChevronRight size={10} />
            </button>
          </div>
        )}

        {isAutoPlay && <span className="text-emerald-400">● AI Running</span>}
      </div>
    </div>
  );
}

/* MAIN COMPONENT */
export function GithubStats() {
  const [stats, setStats] = useState<GithubStatsResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch("/api/github/stats");
        const data = (await res.json()) as GithubStatsResponse;

        if (!res.ok || data.error) {
          setStats({
            profile: null,
            topLanguages: [],
            error: data.error ?? "Unable to load GitHub stats.",
          });
          return;
        }

        setStats(data);
      } catch {
        setStats({
          profile: null,
          topLanguages: [],
          error: "Unable to load GitHub stats.",
        });
      } finally {
        setLoading(false);
      }
    }

    fetchStats();
  }, []);

  return (
    <section className="py-20 bg-surface/30">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mb-8 text-center"
        >
          <p className="font-mono text-xs font-semibold tracking-[0.25em] text-muted uppercase">
            OPEN SOURCE & ACTIVITY
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          {/* BOX 1: GITHUB PROFILE */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={`${NEUMORPHIC_CARD_CLASSES} h-full`}
          >
            <div className="flex flex-col justify-between h-full space-y-6">
              <div>
                <div className="mb-6 flex items-center justify-between border-b border-border/40 pb-4">
                  <div className="flex items-center gap-2 text-lamp font-mono text-xs font-semibold tracking-wider uppercase">
                    <FolderGit2 size={15} />
                    <span>GitHub Profile</span>
                  </div>
                  {stats?.profile?.html_url && (
                    <a
                      href={stats.profile.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 rounded-full border border-border/60 bg-surface/50 px-3 py-1 text-xs text-muted transition-all duration-200 hover:border-lamp/50 hover:text-lamp active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]"
                    >
                      <span>Profile</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>

                {loading ? (
                  <div className="animate-pulse space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-14 w-14 rounded-full bg-border/40" />
                      <div className="space-y-2">
                        <div className="h-4 w-32 rounded bg-border/40" />
                        <div className="h-3 w-20 rounded bg-border/40" />
                      </div>
                    </div>
                  </div>
                ) : stats?.error || !stats?.profile ? (
                  <p className="py-6 text-center text-xs text-muted font-mono">
                    GitHub activity temporarily offline.
                  </p>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      {stats.profile.avatar_url && (
                        <img
                          src={stats.profile.avatar_url}
                          alt={stats.profile.login}
                          className="h-14 w-14 rounded-full border border-border/80 object-cover shrink-0 shadow-[inset_1px_1px_3px_rgba(255,255,255,0.2)]"
                          loading="lazy"
                        />
                      )}
                      <div>
                        <h3 className="text-base font-bold text-ink">
                          {stats.profile.name || stats.profile.login}
                        </h3>
                        <p className="font-mono text-xs text-muted">
                          @{stats.profile.login}
                        </p>
                      </div>
                    </div>

                    {stats.profile.bio && (
                      <p className="text-xs text-muted leading-relaxed">
                        {stats.profile.bio}
                      </p>
                    )}
                  </div>
                )}
              </div>

              {stats?.profile && (
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-3.5 rounded-2xl border border-border/50 bg-surface/40 p-3.5 transition-all hover:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.4)]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-bg text-lamp shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.5)]">
                      <GitBranch size={16} />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                        Repositories
                      </p>
                      <p className="text-lg font-bold text-ink">
                        {stats.profile.public_repos}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5 rounded-2xl border border-border/50 bg-surface/40 p-3.5 transition-all hover:shadow-[inset_2px_2px_6px_rgba(0,0,0,0.4)]">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-bg text-lamp shadow-[-2px_-2px_6px_rgba(255,255,255,0.02),2px_2px_6px_rgba(0,0,0,0.5)]">
                      <Users size={16} />
                    </div>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                        Followers
                      </p>
                      <p className="text-lg font-bold text-ink">
                        {stats.profile.followers}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5">
            {/* BOX 2: TOP LANGUAGES */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className={NEUMORPHIC_CARD_CLASSES}
            >
              <div className="mb-3 flex items-center justify-between border-b border-border/40 pb-2.5">
                <div className="flex items-center gap-2 text-lamp font-mono text-xs font-semibold tracking-wider uppercase">
                  <Code2 size={15} />
                  <span>Top Stack Languages</span>
                </div>
              </div>

              {loading ? (
                <div className="animate-pulse flex gap-2">
                  <div className="h-8 w-20 rounded-xl bg-border/30" />
                  <div className="h-8 w-20 rounded-xl bg-border/30" />
                </div>
              ) : stats?.error || !stats ? (
                <p className="py-2 text-center text-xs text-muted font-mono">
                  Language metrics unavailable.
                </p>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {stats.topLanguages.map((language) => (
                    <div
                      key={language}
                      className="flex items-center gap-2 rounded-xl border border-border/50 bg-surface/60 px-3 py-1.5 text-xs font-medium text-ink transition-all duration-200 hover:border-transparent hover:text-lamp hover:shadow-[-3px_-3px_8px_rgba(255,255,255,0.03),3px_3px_8px_rgba(0,0,0,0.5),inset_1px_1px_1px_rgba(255,255,255,0.1)] active:shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6)]"
                    >
                      <SkillIcon iconKey={language} size={14} />
                      <span className="font-mono text-xs">{language}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* BOX 3: FULL WIDTH SNAKE GAME */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <InteractiveSnakeBox />
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}