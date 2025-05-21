import {NavigationMenu, NavigationMenuList, NavigationMenuContent, NavigationMenuLink, NavigationMenuItem, NavigationMenuTrigger} from "@/components/ui/navigation-menu"
import { Card, CardHeader, CardContent, CardDescription, CardTitle, CardFooter} from "@/components/ui/card"
import * as motion from "motion/react-client"
import { ChevronRight } from "lucide-react"
export default function Home() {
  const text = ["\t I'm a Machine Learning Student with a focus on Attention-Based Networks and Computer Vision.", "I love playing basketball and hiking when I'm not breaking my computer training large, cool and new models."]
  return (
    <div className="flex justify-center mt-5">
      <div className="w-3/5">
        <div className="flex justify-between mr-5 mt-5">
          <div className="ml-5 mt-5">
            <span className="ml-5 align-middle font-newsreader font-medium text-3xl">Adithya Giri</span>
            <br/>
            <span className="ml-5 align-middle font-newsreader text-xl
            ">adithyag (at) berkeley (dot) edu</span>
          </div>
          <NavigationMenu className="flex justify-end text-lg font-newsreader">
            <NavigationMenuList>
              <a href="https://adigiri.com" className="mr-5">About</a>
              <a href="https://github.com/AdiGisthebest" className="mr-5">Github</a>
              <a href="https://adigiri.com/Projects" className="mr-5">Projects</a>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex justify-center mt-5">
          <div className="mt-15 ml-5 text-xl font-newsreader w-1/2 mr-5">
            {text[0].split("").map((char, i) => (
              <motion.div key = {i} custom={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.015*i}}
                className="inline"
              >{char}</motion.div>
            ))}
            <br/>
            <br/>
              {text[1].split("").map((char, i) => (
              <motion.div key = {i} custom={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.015*i + 0.015*text[0].length}}
                className="inline"
              >{char}</motion.div>
            ))} 
            <br/>
            <br/> 
            <div className="text-2xl font-semibold font-newsreader">
                  Projects
                  <Card className="-background mt-5 shadow-2xl">
                    <CardHeader>
                      <CardTitle>ConvFormer: Using Inductive Biases to Improve the Performance of Transformers on Small Datasets</CardTitle>
                      <img src="AttentionHeads.png" className="h-full object-cover object-bottom rounded-sm"/>
                      <div className="text-lg font-semibold text-muted-foreground">
                        <a className="inline-flex items-center text-lg leading-tight" href="https://github.com/AdiGisthebest/ConvFormer">Github<ChevronRight className="h-5 w-5 align-middle relative top-[-1.5px] stroke-[3] stroke-linecap-round" /></a>
                        <a className="ml-4 inline-flex items-center text-lg leading-tight">Preprint<ChevronRight className="h-5 w-5 align-middle relative top-[-1.5px] stroke-[3] stroke-linecap-round" /></a>
                      </div>
                    </CardHeader>
                  </Card>
                  <Card className="-background mt-5 shadow-2xl">
                    <CardHeader>
                      <CardTitle>Using Adversarial Training to Create More Robust Planetary Classification using Flux</CardTitle>
                      <div className="text-lg font-semibold text-muted-foreground">
                        <a className="inline-flex items-center text-lg leading-tight">Presentation<ChevronRight className="h-5 w-5 align-middle relative top-[-1.5px] stroke-[3] stroke-linecap-round" /></a>
                      </div>
                    </CardHeader>
                  </Card>
                  <Card className="-background mt-5 shadow-2xl">
                    <CardHeader>
                      <CardTitle>Carnatic Music Classification Using Transformers</CardTitle>
                      <div className="text-lg font-semibold text-muted-foreground">
                        <a className="inline-flex items-center text-lg leading-tight" href="https://github.com/AdiGisthebest/ConvFormer">Github<ChevronRight className="h-5 w-5 align-middle relative top-[-1.5px] stroke-[3] stroke-linecap-round" /></a>
                        <a className="ml-4 inline-flex items-center text-lg leading-tight">Preprint<ChevronRight className="h-5 w-5 align-middle relative top-[-1.5px] stroke-[3] stroke-linecap-round" /></a>
                      </div>
                    </CardHeader>
                  </Card>
                </div>
            </div>
            <div className="mt-5 ml-10 text-xl font-newsreader w-1/2 mr-5">
            <img src="AdithyaImg.jpg" className="h-1/2 w-full object-cover object-bottom rounded-sm shadow-2xl"/>
            <div className="mt-10 ml-3"> 
                <div className="text-2xl font-semibold font-newsreader">
                  Education
                </div>
                <ul className=" ml-5 list-none">
                  <li>
                    University of California, Berkeley (2025-2029)
                    <ul className="ml-5 list-none">
                      <li>
                        B.S Electrical Engineering and Computer Science
                      </li>
                    </ul>
                  </li>
                </ul>
            </div>
            <div className="mt-5 ml-3"> 
                <div className="text-2xl font-semibold font-newsreader">
                  Work Experience
                </div>
                <ul className="ml-5 list-none">
                  <li>
                  NASA Ames Research Center (2024-25)
                    <ul className="ml-5 list-none">
                      <li>
                        Machine Learning Research Intern
                      </li>
                    </ul>
                  </li>
                </ul>
            </div>
          </div>
          </div>
          
      </div>
    </div>
  );
}
