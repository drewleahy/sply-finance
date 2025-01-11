import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { Event } from "@/types/supabase";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";

export const Events = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .order("date", { ascending: true });

      if (!error && data) {
        setEvents(data);
      }
      setIsLoading(false);
    };

    fetchEvents();
  }, []);

  if (isLoading) {
    return (
      <div className="py-20 bg-luxon-navy">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif text-luxon-gold text-center">
            Loading events...
          </h2>
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-luxon-navy">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-serif text-luxon-gold text-center mb-16">
          Upcoming Events
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 rounded-lg p-6 border border-luxon-gold/20"
            >
              <h3 className="text-xl font-serif text-luxon-gold mb-4">
                {event.title}
              </h3>
              <p className="text-luxon-muted mb-6">{event.description}</p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-luxon-offwhite">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(event.date).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center gap-2 text-luxon-offwhite">
                  <Clock className="w-4 h-4" />
                  <span>{new Date(event.date).toLocaleTimeString()}</span>
                </div>
                <div className="flex items-center gap-2 text-luxon-offwhite">
                  <MapPin className="w-4 h-4" />
                  <span>{event.is_virtual ? "Virtual Event" : event.location}</span>
                </div>
              </div>
              {event.registration_link && (
                <Button
                  className="w-full bg-luxon-gold hover:bg-luxon-gold/90 text-luxon-navy"
                  onClick={() => window.open(event.registration_link, "_blank")}
                >
                  Register Now
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};