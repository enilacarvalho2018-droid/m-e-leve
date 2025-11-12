"use client"

import { Heart, Baby, Brain, Calendar, Sparkles, Droplets } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export default function Home() {
  const pillars = [
    {
      icon: Heart,
      title: "Corpo com leveza",
      description: "Exercícios de 5 a 15 min",
      color: "from-pink-400 to-rose-500",
      bgColor: "bg-pink-50 dark:bg-pink-950/20"
    },
    {
      icon: Brain,
      title: "Emocional",
      description: "Afirmações e meditações",
      color: "from-purple-400 to-violet-500",
      bgColor: "bg-purple-50 dark:bg-purple-950/20"
    },
    {
      icon: Baby,
      title: "Amamentação & Alimentação",
      description: "Receitas que ajudam você e seu bebê",
      color: "from-emerald-400 to-teal-500",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/20"
    },
    {
      icon: Calendar,
      title: "Minha rotina leve",
      description: "Organize seu dia com leveza",
      color: "from-cyan-400 to-blue-500",
      bgColor: "bg-cyan-50 dark:bg-cyan-950/20"
    }
  ]

  const dailyTasks = [
    { task: "Beber água", done: true },
    { task: "Exercício leve", done: true },
    { task: "Momento de autocuidado", done: false },
    { task: "Refeição nutritiva", done: false }
  ]

  const completedTasks = dailyTasks.filter(t => t.done).length
  const progressPercentage = (completedTasks / dailyTasks.length) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cyan-50 dark:from-gray-900 dark:via-purple-950/30 dark:to-cyan-950/30">
      {/* Header */}
      <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-pink-100 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Mãe Leve
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">Cuidar de si é cuidar do seu bebê</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" className="text-purple-600 dark:text-purple-400">
              Perfil
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Welcome Message */}
        <Card className="mb-6 sm:mb-8 p-6 sm:p-8 bg-gradient-to-r from-pink-500 to-purple-600 border-0 text-white shadow-2xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
              <Heart className="w-7 h-7 text-white" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Olá, mamãe! 💕</h2>
              <p className="text-pink-50 text-sm sm:text-base leading-relaxed">
                "Aqui, cada passo é uma vitória. Cuidar de si é também cuidar do seu bebê."
              </p>
            </div>
          </div>
        </Card>

        {/* Daily Progress */}
        <Card className="mb-6 sm:mb-8 p-5 sm:p-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-purple-100 dark:border-gray-700 shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">Seu dia hoje</h3>
            <span className="text-sm text-purple-600 dark:text-purple-400 font-medium">
              {completedTasks} de {dailyTasks.length}
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2 mb-4" />
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            {dailyTasks.map((item, index) => (
              <div
                key={index}
                className={`flex items-center gap-2 p-2 sm:p-3 rounded-lg transition-all ${
                  item.done
                    ? "bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800"
                    : "bg-gray-50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700"
                }`}
              >
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                    item.done ? "bg-emerald-500" : "bg-gray-300 dark:bg-gray-600"
                  }`}
                >
                  {item.done && <span className="text-white text-xs">✓</span>}
                </div>
                <span className={`text-xs sm:text-sm ${item.done ? "text-emerald-700 dark:text-emerald-300" : "text-gray-600 dark:text-gray-400"}`}>
                  {item.task}
                </span>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Reminder */}
        <Card className="mb-6 sm:mb-8 p-4 sm:p-5 bg-cyan-50 dark:bg-cyan-950/20 border-cyan-200 dark:border-cyan-800 shadow-md">
          <div className="flex items-center gap-3">
            <Droplets className="w-8 h-8 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium text-cyan-900 dark:text-cyan-100">Lembrete de hidratação</p>
              <p className="text-xs text-cyan-700 dark:text-cyan-300">Beba água — hidratação ajuda seu leite 💧</p>
            </div>
          </div>
        </Card>

        {/* Main Pillars */}
        <div className="mb-6">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 sm:mb-6">
            Seus pilares de bem-estar
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <Card
                  key={index}
                  className={`${pillar.bgColor} border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden group`}
                >
                  <div className="p-6 sm:p-8">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className={`h-1 bg-gradient-to-r ${pillar.color}`}></div>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Daily Affirmation */}
        <Card className="p-6 sm:p-8 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-950/40 dark:to-pink-950/40 border-0 shadow-xl">
          <div className="text-center">
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
            <h4 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
              Afirmação do dia
            </h4>
            <p className="text-base sm:text-lg text-purple-900 dark:text-purple-200 italic leading-relaxed max-w-2xl mx-auto">
              "Você está fazendo o seu melhor. Cada pequeno cuidado com você mesma é um grande ato de amor."
            </p>
          </div>
        </Card>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-1">
            {[
              { icon: Heart, label: "Início", active: true },
              { icon: Calendar, label: "Rotina", active: false },
              { icon: Baby, label: "Receitas", active: false },
              { icon: Brain, label: "Bem-estar", active: false }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <button
                  key={index}
                  className={`flex flex-col items-center gap-1 py-3 transition-colors ${
                    item.active
                      ? "text-purple-600 dark:text-purple-400"
                      : "text-gray-500 dark:text-gray-400 hover:text-purple-500"
                  }`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </nav>

      {/* Spacing for fixed bottom nav */}
      <div className="h-20"></div>
    </div>
  )
}
