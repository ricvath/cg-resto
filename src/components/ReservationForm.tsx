import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ReservationFormProps {
  language: "en" | "es";
}

export const ReservationForm = ({ language }: ReservationFormProps) => {
  const [date, setDate] = useState<Date>();
  const [isInside, setIsInside] = useState(true);

  const content = {
    en: {
      title: "Reservation Details",
      name: "Full Name",
      email: "Email",
      phone: "Phone",
      location: {
        inside: "Inside",
        terrace: "Terrace"
      },
      date: "Preferred Date",
      specialNeeds: "Special Needs or Requests",
      consent: "I consent to receive SMS notifications, alerts & occasional marketing communication from Cortes Garden. Message frequency varies. Message & data rates may apply. Text HELP to 622 82 99 80 for assistance. You can reply STOP to unsubscribe at any time.",
      submit: "Submit Reservation",
      required: "Required",
      selectDate: "Select date"
    },
    es: {
      title: "Detalles de la Reserva",
      name: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Teléfono",
      location: {
        inside: "Interior",
        terrace: "Terraza"
      },
      date: "Fecha Preferida",
      specialNeeds: "Necesidades Especiales o Solicitudes",
      consent: "Doy mi consentimiento para recibir notificaciones SMS, alertas y comunicaciones de marketing ocasionales de Cortes Garden. La frecuencia de los mensajes varía. Se pueden aplicar tarifas de mensajes y datos. Envía HELP al 622 82 99 80 para obtener ayuda. Puedes responder STOP para cancelar la suscripción en cualquier momento.",
      submit: "Enviar Reserva",
      required: "Obligatorio",
      selectDate: "Seleccionar fecha"
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="w-full max-w-xl mx-auto px-4 py-8">
      <h2 className="font-myanmar text-3xl text-center mb-8">{content[language].title}</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">
            {content[language].name} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            required
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">
            {content[language].email} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            type="email"
            required
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">
            {content[language].phone} <span className="text-red-500">*</span>
          </Label>
          <Input
            id="phone"
            type="tel"
            required
            className="bg-white"
          />
        </div>

        <div className="space-y-2">
          <Label>
            {content[language].location.inside} / {content[language].location.terrace} <span className="text-red-500">*</span>
          </Label>
          <div className="flex items-center space-x-2">
            <Switch
              checked={isInside}
              onCheckedChange={setIsInside}
            />
            <span>{isInside ? content[language].location.inside : content[language].location.terrace}</span>
          </div>
        </div>

        <div className="space-y-2">
          <Label>
            {content[language].date} <span className="text-red-500">*</span>
          </Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-normal bg-white",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : content[language].selectDate}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="space-y-2">
          <Label htmlFor="specialNeeds">{content[language].specialNeeds}</Label>
          <Input
            id="specialNeeds"
            className="bg-white"
          />
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox id="consent" required className="mt-1" />
          <Label htmlFor="consent" className="text-sm">
            {content[language].consent}
          </Label>
        </div>

        <Button type="submit" className="w-full bg-primary text-primary-foreground">
          {content[language].submit}
        </Button>
      </form>
    </div>
  );
}; 