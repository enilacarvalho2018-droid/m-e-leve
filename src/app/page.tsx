"use client"

import { Heart, Baby, Brain, Calendar, Sparkles, Droplets, Clock, Moon, Dumbbell, Milk, ShoppingCart, CreditCard, Wind, Scale, ChefHat, Check } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function Home() {
  const [activeTab, setActiveTab] = useState<"home" | "routine" | "recipes" | "wellness" | "plans">("home")

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

  const plans = [
    {
      name: "Mensal",
      price: "R$ 19,99",
      period: "/mês",
      description: "Perfeito para começar",
      features: [
        "Cardápios personalizados",
        "Exercícios exclusivos",
        "Rotina completa do bebê",
        "Receitas anti-gases",
        "Suporte por chat"
      ],
      color: "from-pink-400 to-rose-500",
      paymentLink: "https://pay.hotmart.com/mensal-maeleve",
      popular: false
    },
    {
      name: "Semestral",
      price: "R$ 99,99",
      period: "/6 meses",
      description: "Economia de 17%",
      features: [
        "Tudo do plano mensal",
        "Acompanhamento nutricional",
        "Exercícios avançados",
        "Comunidade exclusiva",
        "Suporte prioritário"
      ],
      color: "from-purple-400 to-violet-500",
      paymentLink: "https://pay.hotmart.com/semestral-maeleve",
      popular: true
    },
    {
      name: "Anual",
      price: "R$ 199,99",
      period: "/ano",
      description: "Melhor custo-benefício",
      features: [
        "Tudo do plano semestral",
        "Consultoria individual",
        "Planos personalizados",
        "Acesso vitalício a conteúdos",
        "Suporte VIP 24/7"
      ],
      color: "from-emerald-400 to-teal-500",
      paymentLink: "https://pay.hotmart.com/anual-maeleve",
      popular: false
    }
  ]

  const babyRoutine = [
    { time: "06:00", activity: "Amamentação", icon: Milk, color: "bg-blue-100 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400", duration: "30 min" },
    { time: "07:00", activity: "Soninho", icon: Moon, color: "bg-purple-100 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400", duration: "1h 30min" },
    { time: "08:30", activity: "Exercício leve (mamãe)", icon: Dumbbell, color: "bg-pink-100 dark:bg-pink-950/30 text-pink-600 dark:text-pink-400", duration: "10 min" },
    { time: "09:00", activity: "Amamentação", icon: Milk, color: "bg-blue-100 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400", duration: "30 min" },
    { time: "10:00", activity: "Soninho", icon: Moon, color: "bg-purple-100 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400", duration: "2h" },
    { time: "12:00", activity: "Amamentação", icon: Milk, color: "bg-blue-100 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400", duration: "30 min" },
    { time: "13:00", activity: "Soninho", icon: Moon, color: "bg-purple-100 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400", duration: "1h 30min" },
    { time: "14:30", activity: "Exercício leve (mamãe)", icon: Dumbbell, color: "bg-pink-100 dark:bg-pink-950/30 text-pink-600 dark:text-pink-400", duration: "10 min" },
    { time: "15:00", activity: "Amamentação", icon: Milk, color: "bg-blue-100 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400", duration: "30 min" },
    { time: "16:00", activity: "Soninho", icon: Moon, color: "bg-purple-100 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400", duration: "1h" },
    { time: "17:00", activity: "Amamentação", icon: Milk, color: "bg-blue-100 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400", duration: "30 min" },
    { time: "18:00", activity: "Soninho", icon: Moon, color: "bg-purple-100 dark:bg-purple-950/30 text-purple-600 dark:text-purple-400", duration: "1h 30min" },
    { time: "19:30", activity: "Exercício leve (mamãe)", icon: Dumbbell, color: "bg-pink-100 dark:bg-pink-950/30 text-pink-600 dark:text-pink-400", duration: "10 min" },
    { time: "20:00", activity: "Amamentação", icon: Milk, color: "bg-blue-100 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400", duration: "30 min" },
    { time: "21:00", activity: "Soninho noturno", icon: Moon, color: "bg-indigo-100 dark:bg-indigo-950/30 text-indigo-600 dark:text-indigo-400", duration: "3h" },
    { time: "00:00", activity: "Amamentação noturna", icon: Milk, color: "bg-blue-100 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400", duration: "30 min" },
    { time: "03:00", activity: "Amamentação noturna", icon: Milk, color: "bg-blue-100 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400", duration: "30 min" }
  ]

  const dailyMeals = [
    {
      time: "07:00",
      meal: "Café da Manhã",
      title: "Mingau de Aveia com Mamão",
      description: "Aveia em flocos, leite, mamão picado, canela e mel",
      benefits: ["milk", "weight"],
      calories: "320 kcal",
      color: "from-amber-400 to-orange-500"
    },
    {
      time: "10:00",
      meal: "Lanche da Manhã",
      title: "Mix de Castanhas e Banana",
      description: "Castanha-do-pará, amêndoas, nozes e 1 banana",
      benefits: ["milk"],
      calories: "250 kcal",
      color: "from-yellow-400 to-amber-500"
    },
    {
      time: "12:30",
      meal: "Almoço",
      title: "Frango Grelhado com Quinoa e Legumes",
      description: "Peito de frango, quinoa, cenoura, abobrinha, espinafre refogado",
      benefits: ["weight"],
      calories: "480 kcal",
      color: "from-emerald-400 to-teal-500"
    },
    {
      time: "15:30",
      meal: "Lanche da Tarde",
      title: "Vitamina de Aveia com Frutas",
      description: "Leite, aveia, morango, banana e linhaça",
      benefits: ["milk", "weight"],
      calories: "280 kcal",
      color: "from-pink-400 to-rose-500"
    },
    {
      time: "18:30",
      meal: "Jantar",
      title: "Sopa de Grão-de-Bico com Legumes",
      description: "Grão-de-bico, batata-doce, cenoura, abóbora, alho-poró",
      benefits: ["milk", "weight"],
      calories: "380 kcal",
      color: "from-orange-400 to-red-500"
    },
    {
      time: "21:00",
      meal: "Ceia",
      title: "Chá de Erva-Doce com Biscoito de Aveia",
      description: "Chá de erva-doce morno e 2 biscoitos integrais de aveia",
      benefits: ["milk"],
      calories: "150 kcal",
      color: "from-purple-400 to-indigo-500"
    }
  ]

  const foodsToAvoid = [
    "Feijão e leguminosas com casca",
    "Brócolis, couve-flor e repolho",
    "Refrigerantes e bebidas gaseificadas",
    "Chocolate em excesso",
    "Alimentos muito condimentados",
    "Café em excesso (máx 2 xícaras/dia)"
  ]

  const dailyTasks = [
    { task: "Beber água", done: true },
    { task: "Exercício leve", done: true },
    { task: "Momento de autocuidado", done: false },
    { task: "Refeição nutritiva", done: false }
  ]

  const completedTasks = dailyTasks.filter(t => t.done).length
  const progressPercentage = (completedTasks / dailyTasks.length) * 100

  const getBenefitBadge = (benefit: string) => {
    switch (benefit) {
      case "milk":
        return <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 text-xs"><Milk className="w-3 h-3 mr-1" />Aumenta leite</Badge>
      case "weight":
        return <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300 text-xs"><Scale className="w-3 h-3 mr-1" />Emagrecimento</Badge>
      case "safe":
        return <Badge className="bg-green-100 text-green-700 dark:bg-green-950/50 dark:text-green-300 text-xs">✓ Sem gases</Badge>
      default:
        return null
    }
  }

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
            <Button 
              onClick={() => setActiveTab("plans")}
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Assinar Premium
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {activeTab === "home" && (
          <>
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

            {/* Premium CTA */}
            <Card className="mb-6 sm:mb-8 p-5 sm:p-6 bg-gradient-to-r from-amber-400 to-orange-500 border-0 text-white shadow-xl">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Desbloqueie todo o potencial</h3>
                    <p className="text-sm text-amber-50">Cardápios personalizados, exercícios exclusivos e suporte especializado</p>
                  </div>
                </div>
                <Button 
                  onClick={() => setActiveTab("plans")}
                  className="bg-white text-orange-600 hover:bg-orange-50 font-bold shadow-lg whitespace-nowrap"
                >
                  <CreditCard className="w-4 h-4 mr-2" />
                  Ver Planos
                </Button>
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
          </>
        )}

        {activeTab === "routine" && (
          <>
            {/* Routine Header */}
            <Card className="mb-6 p-6 bg-gradient-to-r from-cyan-500 to-blue-600 border-0 text-white shadow-2xl">
              <div className="flex items-center gap-3">
                <Clock className="w-10 h-10" />
                <div>
                  <h2 className="text-2xl font-bold mb-1">Rotina do Bebê</h2>
                  <p className="text-cyan-50 text-sm">Amamentação, soninho e exercícios organizados por hora</p>
                </div>
              </div>
            </Card>

            {/* Timeline */}
            <div className="space-y-3">
              {babyRoutine.map((item, index) => {
                const Icon = item.icon
                return (
                  <Card key={index} className="p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-all">
                    <div className="flex items-center gap-4">
                      <div className="flex flex-col items-center gap-1 min-w-[60px]">
                        <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                        <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{item.time}</span>
                      </div>
                      <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">{item.activity}</h4>
                        <p className="text-xs text-gray-600 dark:text-gray-400">Duração: {item.duration}</p>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* Summary Stats */}
            <Card className="mt-6 p-6 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/20 border-emerald-200 dark:border-emerald-800">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-4">Resumo do dia</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-950/30 flex items-center justify-center mx-auto mb-2">
                    <Milk className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">8x</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Amamentações</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-950/30 flex items-center justify-center mx-auto mb-2">
                    <Moon className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">7x</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Cochilos</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full bg-pink-100 dark:bg-pink-950/30 flex items-center justify-center mx-auto mb-2">
                    <Dumbbell className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                  </div>
                  <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">3x</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Exercícios</p>
                </div>
              </div>
            </Card>
          </>
        )}

        {activeTab === "recipes" && (
          <>
            {/* Recipes Header */}
            <Card className="mb-6 p-6 bg-gradient-to-r from-emerald-500 to-teal-600 border-0 text-white shadow-2xl">
              <div className="flex items-center gap-3">
                <ChefHat className="w-10 h-10" />
                <div>
                  <h2 className="text-2xl font-bold mb-1">Cardápio Diário</h2>
                  <p className="text-emerald-50 text-sm">Refeições que ajudam no emagrecimento e produção de leite</p>
                </div>
              </div>
            </Card>

            {/* Daily Meals */}
            <div className="space-y-4 mb-6">
              {dailyMeals.map((meal, index) => (
                <Card key={index} className="overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all">
                  <div className={`h-2 bg-gradient-to-r ${meal.color}`}></div>
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col items-center">
                          <Clock className="w-4 h-4 text-gray-500 dark:text-gray-400 mb-1" />
                          <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{meal.time}</span>
                        </div>
                        <div>
                          <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide font-medium">{meal.meal}</p>
                          <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200">{meal.title}</h3>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
                        {meal.calories}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{meal.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {meal.benefits.map((benefit, idx) => (
                        <div key={idx}>{getBenefitBadge(benefit)}</div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Total Calories */}
            <Card className="mb-6 p-5 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 border-purple-200 dark:border-purple-800">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-1">Total do dia</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Calorias balanceadas para emagrecimento saudável</p>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">1,860</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">kcal/dia</p>
                </div>
              </div>
            </Card>

            {/* Foods to Avoid */}
            <Card className="p-5 bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800">
              <div className="flex items-center gap-2 mb-3">
                <Wind className="w-5 h-5 text-red-600 dark:text-red-400" />
                <h3 className="font-bold text-gray-800 dark:text-gray-200">Alimentos que causam gases no bebê</h3>
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">Evite estes alimentos durante a amamentação:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {foodsToAvoid.map((food, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-red-500">✗</span>
                    <span>{food}</span>
                  </div>
                ))}
              </div>
            </Card>
          </>
        )}

        {activeTab === "plans" && (
          <>
            {/* Plans Header */}
            <Card className="mb-8 p-6 sm:p-8 bg-gradient-to-r from-purple-500 to-pink-600 border-0 text-white shadow-2xl">
              <div className="text-center">
                <Sparkles className="w-12 h-12 mx-auto mb-4" />
                <h2 className="text-3xl font-bold mb-2">Escolha seu plano</h2>
                <p className="text-purple-50 text-sm sm:text-base">Invista em você e no seu bem-estar</p>
              </div>
            </Card>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {plans.map((plan, index) => (
                <Card 
                  key={index} 
                  className={`relative overflow-hidden bg-white dark:bg-gray-800 border-2 ${
                    plan.popular 
                      ? "border-purple-500 shadow-2xl scale-105" 
                      : "border-gray-200 dark:border-gray-700 shadow-lg"
                  } hover:shadow-2xl transition-all duration-300`}
                >
                  {plan.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                      MAIS POPULAR
                    </div>
                  )}
                  
                  <div className={`h-2 bg-gradient-to-r ${plan.color}`}></div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {plan.description}
                    </p>
                    
                    <div className="mb-6">
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-gray-900 dark:text-gray-100">
                          {plan.price}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">
                          {plan.period}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    <a 
                      href={plan.paymentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button 
                        className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90 text-white font-bold py-6 shadow-lg`}
                      >
                        <CreditCard className="w-5 h-5 mr-2" />
                        Assinar Agora
                      </Button>
                    </a>
                  </div>
                </Card>
              ))}
            </div>

            {/* Guarantee Section */}
            <Card className="p-6 bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                  Garantia de 7 dias
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                  Experimente sem riscos! Se não ficar satisfeita nos primeiros 7 dias, devolvemos 100% do seu investimento.
                </p>
              </div>
            </Card>
          </>
        )}

        {activeTab === "wellness" && (
          <Card className="p-8 text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm">
            <Brain className="w-16 h-16 text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">Bem-estar em breve</h3>
            <p className="text-gray-600 dark:text-gray-400">Meditações e exercícios emocionais chegando em breve</p>
          </Card>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-5 gap-1">
            {[
              { icon: Heart, label: "Início", tab: "home" as const },
              { icon: Calendar, label: "Rotina", tab: "routine" as const },
              { icon: Baby, label: "Receitas", tab: "recipes" as const },
              { icon: CreditCard, label: "Planos", tab: "plans" as const },
              { icon: Brain, label: "Bem-estar", tab: "wellness" as const }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(item.tab)}
                  className={`flex flex-col items-center gap-1 py-3 transition-colors ${
                    activeTab === item.tab
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
