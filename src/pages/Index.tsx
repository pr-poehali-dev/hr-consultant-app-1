import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Separator } from '@/components/ui/separator';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

type View = 'home' | 'profile' | 'rewards';

export default function Index() {
  const [currentView, setCurrentView] = useState<View>('home');
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Icon name="Rocket" className="text-white" size={24} />
            </div>
            <h1 className="text-2xl font-heading font-bold text-secondary">HR Консультант</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-6">
            <Button 
              variant="ghost" 
              className="text-secondary hover:text-primary hover:bg-gray-50"
              onClick={() => setCurrentView('home')}
            >
              Главная
            </Button>
            <Button 
              variant="ghost" 
              className="text-secondary hover:text-primary hover:bg-gray-50"
              onClick={() => setCurrentView('profile')}
            >
              Мой профиль
            </Button>
          </nav>

          <Sheet open={profileMenuOpen} onOpenChange={setProfileMenuOpen}>
            <SheetTrigger asChild>
              <Avatar className="cursor-pointer hover:ring-2 ring-primary transition-all">
                <AvatarFallback className="bg-primary text-white font-semibold">АС</AvatarFallback>
              </Avatar>
            </SheetTrigger>
            <SheetContent className="w-full sm:max-w-md overflow-y-auto">
              <SheetHeader>
                <SheetTitle className="font-heading">Профиль</SheetTitle>
                <SheetDescription>Управление аккаунтом и настройками</SheetDescription>
              </SheetHeader>
              
              <Tabs defaultValue="info" className="mt-6">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="info">Информация</TabsTrigger>
                  <TabsTrigger value="settings">Настройки</TabsTrigger>
                  <TabsTrigger value="support">Поддержка</TabsTrigger>
                </TabsList>
                
                <TabsContent value="info" className="space-y-4 mt-4">
                  <div className="space-y-3">
                    <div>
                      <Label className="text-muted-foreground text-xs">ФИО</Label>
                      <Input defaultValue="Алексей Смирнов" />
                    </div>
                    <div>
                      <Label className="text-muted-foreground text-xs">Email</Label>
                      <Input defaultValue="a.smirnov@company.ru" type="email" />
                    </div>
                    <div>
                      <Label className="text-muted-foreground text-xs">Должность</Label>
                      <Input defaultValue="Middle Product Manager" />
                    </div>
                    <div>
                      <Label className="text-muted-foreground text-xs">Грейд</Label>
                      <Input defaultValue="M2" />
                    </div>
                    <div>
                      <Label className="text-muted-foreground text-xs">Дата начала работы</Label>
                      <Input defaultValue="15.03.2022" />
                    </div>
                    <div>
                      <Label className="text-muted-foreground text-xs">Департамент</Label>
                      <Input defaultValue="Product Development" />
                    </div>
                    <div>
                      <Label className="text-muted-foreground text-xs">Руководитель</Label>
                      <Input defaultValue="Иванова Мария Петровна" />
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="settings" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-3">Уведомления</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label>Email уведомления</Label>
                          <input type="checkbox" defaultChecked className="w-4 h-4" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label>Push уведомления</Label>
                          <input type="checkbox" className="w-4 h-4" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label>Напоминания о целях</Label>
                          <input type="checkbox" defaultChecked className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h4 className="font-medium mb-3">Приватность</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label>Публичный профиль</Label>
                          <input type="checkbox" defaultChecked className="w-4 h-4" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label>Показывать прогресс</Label>
                          <input type="checkbox" defaultChecked className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="support" className="space-y-4 mt-4">
                  <div className="space-y-4">
                    <div>
                      <Label>Тема обращения</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Выберите тему" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tech">Технический вопрос</SelectItem>
                          <SelectItem value="career">Карьерное развитие</SelectItem>
                          <SelectItem value="bug">Сообщить об ошибке</SelectItem>
                          <SelectItem value="other">Другое</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Описание</Label>
                      <Textarea placeholder="Опишите ваш вопрос..." rows={4} />
                    </div>
                    <Button className="w-full">Отправить</Button>
                    
                    <Separator className="my-4" />
                    
                    <div>
                      <h4 className="font-medium mb-3">Контакты поддержки</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <Icon name="Mail" size={16} className="text-primary" />
                          <span>support@company.ru</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Icon name="MessageCircle" size={16} className="text-primary" />
                          <span>Telegram: @hr_support</span>
                        </div>
                      </div>
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <Accordion type="single" collapsible>
                      <AccordionItem value="faq1">
                        <AccordionTrigger className="text-sm">Как обновить профиль?</AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground">
                          Перейдите во вкладку "Информация" и отредактируйте необходимые поля.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="faq2">
                        <AccordionTrigger className="text-sm">Как работает ИИ-консультант?</AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground">
                          ИИ анализирует ваши навыки, цели и создает персональный план развития.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="faq3">
                        <AccordionTrigger className="text-sm">Как часто обновлять диагностику?</AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground">
                          Рекомендуется проходить диагностику раз в квартал.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </TabsContent>
              </Tabs>
              
              <Separator className="my-6" />
              
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => {
                  setProfileMenuOpen(false);
                  setCurrentView('home');
                }}
              >
                <Icon name="LogOut" size={16} className="mr-2" />
                Выйти из аккаунта
              </Button>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {currentView === 'home' ? (
        <HomePage onNavigate={setCurrentView} />
      ) : currentView === 'profile' ? (
        <ProfilePage onNavigate={setCurrentView} />
      ) : (
        <RewardsPage onNavigate={setCurrentView} />
      )}
    </div>
  );
}

function HomePage({ onNavigate }: { onNavigate: (view: View) => void }) {
  return (
    <main className="container mx-auto px-6 py-12 bg-white">
      <section className="text-center mb-20 animate-fade-in">
        <h2 className="text-5xl md:text-6xl font-heading font-bold text-secondary mb-6">
          HR Консультант — ваш путь<br />профессионального роста
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          ИИ-ассистент анализирует навыки, помогает ставить карьерные цели<br />
          и формирует персональные планы развития
        </p>
        <div className="flex gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8"
            onClick={() => onNavigate('profile')}
          >
            Войти в профиль
          </Button>
        </div>
      </section>

      <section className="mb-20">
        <h3 className="text-3xl font-heading font-bold text-secondary text-center mb-12">
          Возможности платформы
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-card border hover:shadow-lg transition-all animate-scale-in">
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="Target" className="text-primary" size={24} />
              </div>
              <CardTitle className="text-secondary font-heading">Диагностика навыков</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Оценка компетенций, построение карты навыков, анализ сильных и слабых сторон
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="TrendingUp" className="text-primary" size={24} />
              </div>
              <CardTitle className="text-secondary font-heading">Карьерная траектория</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Подбор реалистичных карьерных направлений с учётом уровня, навыков и корпоративных треков
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="ListChecks" className="text-primary" size={24} />
              </div>
              <CardTitle className="text-secondary font-heading">План развития</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Индивидуальный набор задач, рекомендации по ресурсам, оценка прогресса
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card border hover:shadow-lg transition-all animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon name="BarChart3" className="text-primary" size={24} />
              </div>
              <CardTitle className="text-secondary font-heading">Профессиональные метрики</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Индекс развития, динамика навыков, карьерный уровень
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-20">
        <h3 className="text-3xl font-heading font-bold text-secondary text-center mb-12">
          Прогресс и метрики
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card border hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-secondary font-heading text-lg">AI Development Index</CardTitle>
              <CardDescription className="text-muted-foreground">Индекс развития на основе оценки навыков</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-primary mb-2">78%</div>
              <Progress value={78} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">+5% за последний месяц</p>
            </CardContent>
          </Card>

          <Card className="bg-card border hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-secondary font-heading text-lg">Skill Map Coverage</CardTitle>
              <CardDescription className="text-muted-foreground">Процент изучения компетенций</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-primary mb-2">65%</div>
              <Progress value={65} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">12 из 18 компетенций</p>
            </CardContent>
          </Card>

          <Card className="bg-card border hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle className="text-secondary font-heading text-lg">Career Readiness</CardTitle>
              <CardDescription className="text-muted-foreground">Готовность к следующей роли</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold text-primary mb-2">45%</div>
              <Progress value={45} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">До Team Lead</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section>
        <h3 className="text-3xl font-heading font-bold text-secondary text-center mb-12">
          Как это работает
        </h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">1</span>
            </div>
            <h4 className="text-xl font-heading font-semibold text-secondary mb-2">Пройдите диагностику</h4>
            <p className="text-muted-foreground text-sm">Ответьте на вопросы о навыках и целях</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">2</span>
            </div>
            <h4 className="text-xl font-heading font-semibold text-secondary mb-2">Получите траекторию</h4>
            <p className="text-muted-foreground text-sm">ИИ построит карьерный путь и план</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-primary">3</span>
            </div>
            <h4 className="text-xl font-heading font-semibold text-secondary mb-2">Развивайтесь</h4>
            <p className="text-muted-foreground text-sm">Работайте по персональному плану</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function ProfilePage({ onNavigate }: { onNavigate: (view: View) => void }) {
  const [selectedTab, setSelectedTab] = useState('dashboard');
  const [generatePlanLoading, setGeneratePlanLoading] = useState(false);

  const handleGeneratePlan = () => {
    setGeneratePlanLoading(true);
    setTimeout(() => setGeneratePlanLoading(false), 2000);
  };

  return (
    <main className="container mx-auto px-6 py-8 bg-white">
      <div className="mb-8">
        <h2 className="text-4xl font-heading font-bold text-secondary mb-2">Личный кабинет</h2>
        <p className="text-muted-foreground">Управление карьерным развитием</p>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-5 bg-muted">
          <TabsTrigger value="dashboard">Дашборд</TabsTrigger>
          <TabsTrigger value="diagnostic">Диагностика</TabsTrigger>
          <TabsTrigger value="career">Карьера</TabsTrigger>
          <TabsTrigger value="plan">План развития</TabsTrigger>
          <TabsTrigger value="resources">Ресурсы</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid lg:grid-cols-3 gap-6">
            <Card 
              className="bg-card border hover:shadow-lg transition-all cursor-pointer" 
              onClick={() => onNavigate('rewards')}
            >
              <CardHeader>
                <CardTitle className="text-secondary font-heading">Индекс развития</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-bold text-primary mb-4">78%</div>
                <Progress value={78} className="h-3 mb-2" />
                <p className="text-xs text-muted-foreground">+5% за последний месяц</p>
                <p className="text-xs text-primary mt-2 flex items-center gap-1">
                  <Icon name="Gift" size={12} />
                  Открыть награды
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-secondary font-heading">Готовность к повышению</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-bold text-primary mb-4">45%</div>
                <Progress value={45} className="h-3 mb-2" />
                <p className="text-xs text-muted-foreground">До Team Lead</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-secondary font-heading">Прогресс плана</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-bold text-primary mb-4">65%</div>
                <Progress value={65} className="h-3 mb-2" />
                <p className="text-xs text-muted-foreground">8 из 12 задач выполнено</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-card border">
              <CardHeader>
                <CardTitle className="text-secondary font-heading">Компетенции</CardTitle>
                <CardDescription className="text-muted-foreground">Ваши профессиональные навыки</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-secondary">Управление продуктом</span>
                    <span className="text-sm text-primary font-semibold">85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-secondary">Аналитика</span>
                    <span className="text-sm text-primary font-semibold">72%</span>
                  </div>
                  <Progress value={72} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-secondary">Управление командой</span>
                    <span className="text-sm text-primary font-semibold">45%</span>
                  </div>
                  <Progress value={45} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-secondary">Стратегическое планирование</span>
                    <span className="text-sm text-primary font-semibold">38%</span>
                  </div>
                  <Progress value={38} className="h-2" />
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border">
              <CardHeader>
                <CardTitle className="text-secondary font-heading">Достижения</CardTitle>
                <CardDescription className="text-muted-foreground">Профессиональные бейджи</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center p-4 rounded-lg bg-card border">
                    <Icon name="Award" className="text-primary mb-2" size={32} />
                    <span className="text-xs text-secondary text-center">Первопроходец</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-card border">
                    <Icon name="Users" className="text-primary mb-2" size={32} />
                    <span className="text-xs text-secondary text-center">Командный игрок</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-card border">
                    <Icon name="BookOpen" className="text-primary mb-2" size={32} />
                    <span className="text-xs text-secondary text-center">Эксперт Python</span>
                  </div>
                  <div className="flex flex-col items-center p-4 rounded-lg bg-card border">
                    <Icon name="Lightbulb" className="text-primary mb-2" size={32} />
                    <span className="text-xs text-secondary text-center">Стратег</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="diagnostic" className="space-y-6">
          <Card className="bg-card border">
            <CardHeader>
              <CardTitle className="text-secondary font-heading">Диагностика навыков</CardTitle>
              <CardDescription className="text-muted-foreground">
                Ответьте на вопросы — ИИ сформирует карту навыков, определит ваш уровень и предложит карьерную траекторию
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label className="text-secondary mb-2 block">Должность</Label>
                <Input defaultValue="Middle Product Manager" className="bg-card border text-secondary" />
              </div>

              <div>
                <Label className="text-secondary mb-2 block">Статус</Label>
                <Select defaultValue="middle">
                  <SelectTrigger className="bg-card border text-secondary">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="junior">Junior</SelectItem>
                    <SelectItem value="middle">Middle</SelectItem>
                    <SelectItem value="senior">Senior</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <h4 className="text-secondary font-semibold">Soft Skills</h4>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <Label className="text-secondary">Коммуникация</Label>
                    <span className="text-primary font-semibold">7/10</span>
                  </div>
                  <Slider defaultValue={[70]} max={100} step={10} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <Label className="text-secondary">Самоорганизация</Label>
                    <span className="text-primary font-semibold">8/10</span>
                  </div>
                  <Slider defaultValue={[80]} max={100} step={10} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <Label className="text-secondary">Решение проблем</Label>
                    <span className="text-primary font-semibold">6/10</span>
                  </div>
                  <Slider defaultValue={[60]} max={100} step={10} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <Label className="text-secondary">Навык обучения</Label>
                    <span className="text-primary font-semibold">9/10</span>
                  </div>
                  <Slider defaultValue={[90]} max={100} step={10} />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-secondary font-semibold">Hard Skills</h4>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <Label className="text-secondary">Аналитика</Label>
                    <span className="text-primary font-semibold">7/10</span>
                  </div>
                  <Slider defaultValue={[70]} max={100} step={10} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <Label className="text-secondary">Управление проектами</Label>
                    <span className="text-primary font-semibold">6/10</span>
                  </div>
                  <Slider defaultValue={[60]} max={100} step={10} />
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <Label className="text-secondary">Разработка</Label>
                    <span className="text-primary font-semibold">4/10</span>
                  </div>
                  <Slider defaultValue={[40]} max={100} step={10} />
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90">
                Сохранить результаты диагностики
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="career" className="space-y-6">
          <Card className="bg-card border">
            <CardHeader>
              <CardTitle className="text-secondary font-heading">Карьерная траектория</CardTitle>
              <CardDescription className="text-muted-foreground">Ваш путь профессионального роста</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="relative pl-8 pb-8 border-l-2 border-primary/50">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Icon name="Check" className="text-white" size={14} />
                  </div>
                  <Badge className="mb-2 bg-primary">Текущая роль</Badge>
                  <h4 className="text-xl font-heading font-semibold text-secondary mb-2">Middle Product Manager</h4>
                  <p className="text-muted-foreground text-sm mb-3">Соответствие: 85%</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-primary border-primary/30">Управление продуктом</Badge>
                    <Badge variant="outline" className="text-primary border-primary/30">Аналитика</Badge>
                    <Badge variant="outline" className="text-primary border-primary/30">Коммуникация</Badge>
                  </div>
                </div>

                <div className="relative pl-8 pb-8 border-l-2 border-primary/30">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-white/20 border-2 border-primary"></div>
                  <Badge className="mb-2 bg-primary/60">Ближайшая роль (6-12 мес)</Badge>
                  <h4 className="text-xl font-heading font-semibold text-secondary mb-2">Senior Product Manager</h4>
                  <p className="text-muted-foreground text-sm mb-3">Готовность: 45%</p>
                  <div className="mb-3">
                    <p className="text-secondary text-sm font-medium mb-2">Необходимые компетенции:</p>
                    <div className="space-y-2">
                      <div>
                        <div className="flex justify-between mb-1 text-xs">
                          <span className="text-muted-foreground">Управление командой</span>
                          <span className="text-primary">45%</span>
                        </div>
                        <Progress value={45} className="h-1.5" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1 text-xs">
                          <span className="text-muted-foreground">Стратегическое планирование</span>
                          <span className="text-primary">38%</span>
                        </div>
                        <Progress value={38} className="h-1.5" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="relative pl-8">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-muted border-2 border"></div>
                  <Badge className="mb-2 bg-muted">Долгосрочная роль (18-24 мес)</Badge>
                  <h4 className="text-xl font-heading font-semibold text-secondary mb-2">Team Lead / Product Owner</h4>
                  <p className="text-muted-foreground text-sm mb-3">Готовность: 22%</p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="text-muted-foreground border">Управление командой</Badge>
                    <Badge variant="outline" className="text-muted-foreground border">Стратегия</Badge>
                    <Badge variant="outline" className="text-muted-foreground border">Лидерство</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="plan" className="space-y-6">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h3 className="text-2xl font-heading font-bold text-secondary">План развития</h3>
              <p className="text-muted-foreground text-sm">Персональные задачи для карьерного роста</p>
            </div>
            <Button 
              className="bg-primary hover:bg-primary/90"
              onClick={handleGeneratePlan}
              disabled={generatePlanLoading}
            >
              {generatePlanLoading ? (
                <>
                  <Icon name="Loader2" className="mr-2 animate-spin" size={16} />
                  Генерация...
                </>
              ) : (
                <>
                  <Icon name="Sparkles" className="mr-2" size={16} />
                  Сгенерировать новый план
                </>
              )}
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <Card className="bg-card border">
              <CardHeader>
                <CardTitle className="text-secondary font-heading text-lg">Общий прогресс</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary mb-2">65%</div>
                <Progress value={65} className="h-3" />
              </CardContent>
            </Card>

            <Card className="bg-card border">
              <CardHeader>
                <CardTitle className="text-secondary font-heading text-lg">Индекс развития</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold text-primary mb-2">+12%</div>
                <Progress value={78} className="h-3" />
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="bg-card border">
              <CardHeader>
                <CardTitle className="text-secondary font-heading text-lg">Soft Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">72%</div>
                <Progress value={72} className="h-2 mb-4" />
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" defaultChecked className="mt-1" />
                    <div className="flex-1">
                      <p className="text-secondary font-medium">Пройти курс "Эффективная коммуникация"</p>
                      <p className="text-muted-foreground text-xs">До 30.12.2024 • Влияние: высокое</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <div className="flex-1">
                      <p className="text-secondary font-medium">Провести 3 встречи 1-on-1 с командой</p>
                      <p className="text-muted-foreground text-xs">До 15.01.2025 • Влияние: среднее</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border">
              <CardHeader>
                <CardTitle className="text-secondary font-heading text-lg">Hard Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-primary mb-2">68%</div>
                <Progress value={68} className="h-2 mb-4" />
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <input type="checkbox" defaultChecked className="mt-1" />
                    <div className="flex-1">
                      <p className="text-secondary font-medium">Получить сертификат Product Management</p>
                      <p className="text-muted-foreground text-xs">До 20.01.2025 • Влияние: высокое</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <input type="checkbox" className="mt-1" />
                    <div className="flex-1">
                      <p className="text-secondary font-medium">Возглавить кросс-функциональный проект</p>
                      <p className="text-muted-foreground text-xs">До 28.02.2025 • Влияние: очень высокое</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="resources" className="space-y-6">
          <Card className="bg-card border">
            <CardHeader>
              <CardTitle className="text-secondary font-heading">Рекомендованные ресурсы</CardTitle>
              <CardDescription className="text-muted-foreground">
                ИИ подобрал образовательные материалы на основе вашей диагностики
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="courses">
                <TabsList className="mb-4">
                  <TabsTrigger value="courses">Курсы</TabsTrigger>
                  <TabsTrigger value="articles">Статьи</TabsTrigger>
                  <TabsTrigger value="webinars">Вебинары</TabsTrigger>
                  <TabsTrigger value="books">Книги</TabsTrigger>
                </TabsList>

                <TabsContent value="courses" className="space-y-4">
                  <div className="p-4 rounded-lg bg-card border">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-secondary font-semibold mb-1">Основы управления IT-командой</h4>
                        <p className="text-muted-foreground text-sm mb-2">Для перехода в Team Lead</p>
                      </div>
                      <Badge className="bg-primary">Рекомендован</Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={12} />
                        8 недель
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="BarChart" size={12} />
                        Middle → Senior
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-card border">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-secondary font-semibold mb-1">Стратегическое планирование продукта</h4>
                        <p className="text-muted-foreground text-sm mb-2">Для развития лидерства</p>
                      </div>
                      <Badge className="bg-primary">Рекомендован</Badge>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={12} />
                        6 недель
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="BarChart" size={12} />
                        Middle → Senior
                      </span>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-card border">
                    <h4 className="text-secondary font-semibold mb-1">Agile & Scrum для PM</h4>
                    <p className="text-muted-foreground text-sm mb-2">Практический курс</p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={12} />
                        4 недели
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="BarChart" size={12} />
                        All levels
                      </span>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="articles" className="space-y-4">
                  <div className="p-4 rounded-lg bg-card border">
                    <h4 className="text-secondary font-semibold mb-1">Как выстроить эффективную коммуникацию в команде</h4>
                    <p className="text-muted-foreground text-sm">5 минут чтения</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border">
                    <h4 className="text-secondary font-semibold mb-1">10 метрик Product Manager</h4>
                    <p className="text-muted-foreground text-sm">7 минут чтения</p>
                  </div>
                </TabsContent>

                <TabsContent value="webinars" className="space-y-4">
                  <div className="p-4 rounded-lg bg-card border">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-secondary font-semibold mb-1">Переход из Middle в Senior PM</h4>
                        <p className="text-muted-foreground text-sm">Живая сессия • 18.12.2024, 18:00</p>
                      </div>
                      <Badge variant="outline" className="border-primary text-primary">Скоро</Badge>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="books" className="space-y-4">
                  <div className="p-4 rounded-lg bg-card border">
                    <h4 className="text-secondary font-semibold mb-1">Inspired: How to Create Products Customers Love</h4>
                    <p className="text-muted-foreground text-sm">Marty Cagan</p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border">
                    <h4 className="text-secondary font-semibold mb-1">The Lean Startup</h4>
                    <p className="text-muted-foreground text-sm">Eric Ries</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}

function RewardsPage({ onNavigate }: { onNavigate: (view: View) => void }) {
  const currentProgress = 78;
  
  const levels = [
    { id: 1, name: 'Новичок', minProgress: 0, maxProgress: 19, color: 'bg-gray-400', rewards: ['Доступ к базовым курсам', 'Сертификат новичка'] },
    { id: 2, name: 'Практикант', minProgress: 20, maxProgress: 39, color: 'bg-blue-400', rewards: ['Курс "Основы PM"', 'Купон 10% на книги'] },
    { id: 3, name: 'Специалист', minProgress: 40, maxProgress: 59, color: 'bg-green-400', rewards: ['ChatGPT Plus на 1 месяц', 'Скидка 20% на курсы Coursera'] },
    { id: 4, name: 'Эксперт', minProgress: 60, maxProgress: 79, color: 'bg-yellow-400', rewards: ['Подписка Skillbox на 3 месяца', 'Онлайн-кинотеатр ivi Premium', 'Купон 500₽ на Ozon'] },
    { id: 5, name: 'Мастер', minProgress: 80, maxProgress: 100, color: 'bg-purple-500', rewards: ['ChatGPT Plus на год', 'Netflix Premium на 6 месяцев', 'Купон 5000₽ на обучение', 'Эксклюзивный коучинг'] },
  ];

  const getCurrentLevel = () => {
    return levels.find(l => currentProgress >= l.minProgress && currentProgress <= l.maxProgress) || levels[0];
  };

  const currentLevel = getCurrentLevel();

  return (
    <main className="container mx-auto px-6 py-12 bg-white min-h-screen">
      <div className="mb-8">
        <Button 
          variant="ghost" 
          onClick={() => onNavigate('profile')} 
          className="mb-4 text-secondary hover:text-primary"
        >
          <Icon name="ArrowLeft" size={20} className="mr-2" />
          Назад в профиль
        </Button>
        <h2 className="text-5xl font-heading font-bold text-secondary mb-3">Система уровней и наград</h2>
        <p className="text-lg text-muted-foreground">Развивайтесь и получайте бонусы за прогресс</p>
      </div>

      <div className="mb-12">
        <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <CardContent className="p-8">
            <div className="flex items-center justify-between mb-6">
              <div>
                <Badge className={`${currentLevel.color} text-white text-lg px-4 py-2 mb-2`}>
                  {currentLevel.name}
                </Badge>
                <h3 className="text-2xl font-heading font-bold text-secondary">Ваш текущий уровень</h3>
              </div>
              <div className="text-right">
                <div className="text-6xl font-bold text-primary">{currentProgress}%</div>
                <p className="text-muted-foreground">прогресс развития</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">До следующего уровня:</span>
                <span className="font-semibold text-secondary">
                  {currentLevel.id < 5 ? `${levels[currentLevel.id].minProgress - currentProgress}%` : 'Максимальный уровень!'}
                </span>
              </div>
              <Progress value={currentProgress} className="h-4" />
            </div>
            <div className="flex gap-1 mt-6">
              {levels.map((level) => (
                <div
                  key={level.id}
                  className={`flex-1 h-2 rounded-full ${
                    currentProgress >= level.minProgress ? level.color : 'bg-gray-200'
                  } transition-all`}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mb-8">
        <h3 className="text-3xl font-heading font-bold text-secondary mb-6">Все уровни и награды</h3>
        <div className="space-y-6">
          {levels.map((level, index) => {
            const isUnlocked = currentProgress >= level.minProgress;
            const isCurrent = level.id === currentLevel.id;
            
            return (
              <Card 
                key={level.id} 
                className={`border-2 transition-all ${
                  isCurrent 
                    ? 'border-primary shadow-lg' 
                    : isUnlocked 
                    ? 'border-green-300 bg-green-50/50' 
                    : 'border-gray-200 opacity-60'
                } hover:shadow-md`}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-6">
                    <div className={`w-20 h-20 rounded-full ${level.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="text-3xl font-bold text-white">{level.id}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h4 className="text-2xl font-heading font-bold text-secondary">{level.name}</h4>
                        {isCurrent && <Badge className="bg-primary">Текущий</Badge>}
                        {isUnlocked && !isCurrent && <Badge className="bg-green-500">Разблокирован</Badge>}
                        {!isUnlocked && <Badge variant="outline">Заблокирован</Badge>}
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Icon name="Target" size={16} />
                          <span>Прогресс: {level.minProgress}% - {level.maxProgress}%</span>
                        </div>
                        <Progress value={isUnlocked ? 100 : 0} className="h-2" />
                      </div>
                      
                      <div>
                        <h5 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                          <Icon name="Gift" size={18} className="text-primary" />
                          Награды:
                        </h5>
                        <div className="grid md:grid-cols-2 gap-3">
                          {level.rewards.map((reward, idx) => (
                            <div 
                              key={idx} 
                              className={`flex items-center gap-3 p-3 rounded-lg border ${
                                isUnlocked 
                                  ? 'bg-white border-primary/20' 
                                  : 'bg-gray-50 border-gray-200'
                              }`}
                            >
                              <div className={`w-10 h-10 rounded-lg ${isUnlocked ? 'bg-primary/10' : 'bg-gray-200'} flex items-center justify-center flex-shrink-0`}>
                                {reward.includes('ChatGPT') && <Icon name="MessageSquare" className={isUnlocked ? 'text-primary' : 'text-gray-400'} size={20} />}
                                {reward.includes('курс') && <Icon name="GraduationCap" className={isUnlocked ? 'text-primary' : 'text-gray-400'} size={20} />}
                                {reward.includes('кинотеатр') && <Icon name="Film" className={isUnlocked ? 'text-primary' : 'text-gray-400'} size={20} />}
                                {reward.includes('Купон') && <Icon name="Ticket" className={isUnlocked ? 'text-primary' : 'text-gray-400'} size={20} />}
                                {reward.includes('Сертификат') && <Icon name="Award" className={isUnlocked ? 'text-primary' : 'text-gray-400'} size={20} />}
                                {reward.includes('Netflix') && <Icon name="Tv" className={isUnlocked ? 'text-primary' : 'text-gray-400'} size={20} />}
                                {reward.includes('коучинг') && <Icon name="Users" className={isUnlocked ? 'text-primary' : 'text-gray-400'} size={20} />}
                                {!reward.includes('ChatGPT') && !reward.includes('курс') && !reward.includes('кинотеатр') && !reward.includes('Купон') && !reward.includes('Сертификат') && !reward.includes('Netflix') && !reward.includes('коучинг') && <Icon name="Gift" className={isUnlocked ? 'text-primary' : 'text-gray-400'} size={20} />}
                              </div>
                              <span className={`text-sm font-medium ${isUnlocked ? 'text-secondary' : 'text-gray-500'}`}>
                                {reward}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      <Card className="bg-gradient-to-r from-primary/5 to-purple-500/5 border-primary/20">
        <CardContent className="p-8 text-center">
          <Icon name="Sparkles" className="mx-auto text-primary mb-4" size={48} />
          <h3 className="text-2xl font-heading font-bold text-secondary mb-3">
            Продолжайте развиваться!
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Выполняйте задачи, проходите курсы и улучшайте компетенции, чтобы разблокировать новые уровни и получить эксклюзивные награды
          </p>
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90"
            onClick={() => onNavigate('profile')}
          >
            Вернуться к плану развития
          </Button>
        </CardContent>
      </Card>
    </main>
  );
}