import { Code, Lightbulb, Newspaper } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl ">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About<span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold"> Label A</h3>

            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
              alias magni esse minima ducimus possimus eos libero a optio qui.
            </p>

            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis quas odio magnam, at adipisci id dicta laborum hic
              tempore impedit excepturi. Ullam eaque sit perspiciatis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="custom-button">
                Get In Touch
              </a>

              <a
                href="/Christopher_Lam_Resume_SWE.pdf"
                download="Christopher Lam Resume"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Title B</h4>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Soluta, aut.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Title C</h4>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Soluta, aut.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Newspaper className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Title D</h4>
                  <p className="text-muted-foreground">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Soluta, aut.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
