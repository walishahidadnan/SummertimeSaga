import { useState } from "react";
import { Download, Smartphone, Monitor, Apple, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const InstallSection = () => {
  const androidSteps = [
    "Tap the download button to get the latest MOD APK file",
    "Go to Settings > Security > Enable Unknown Sources",
    "Locate the downloaded file in your Downloads folder",
    "Tap on the APK file to begin installation",
    "Launch the game and enjoy all unlocked features!",
  ];

  const pcSteps = [
    "Download an Android emulator like BlueStacks or LDPlayer",
    "Install the emulator on your PC",
    "Download the Summertime Saga MOD APK",
    "Open the APK file with your emulator",
    "Launch the game and start playing!",
  ];

  const iosSteps = [
    "Download the iOS-compatible file (ZIP or IPA format)",
    "Install a third-party app like AppValley or AltStore",
    "Go to Settings > General > Device Management",
    "Trust the certificate from the installer",
    "Install and launch the game!",
  ];

  const TabContent = ({ steps, platform }: { steps: string[]; platform: string }) => (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex items-start gap-4 p-4 rounded-2xl bg-muted/50 hover:bg-muted transition-colors"
        >
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <span className="text-sm font-bold text-primary-foreground">{index + 1}</span>
          </div>
          <p className="text-foreground pt-1">{step}</p>
        </div>
      ))}
      <Button className="btn-download w-full gap-2 mt-6">
        <Download className="w-5 h-5" />
        Download for {platform}
      </Button>
    </div>
  );

  return (
    <section id="install" className="py-16 md:py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-golden/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-coral/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/10 border border-coral/20 mb-4">
            <Download className="w-4 h-4 text-coral" />
            <span className="text-sm font-medium text-coral">Easy Installation</span>
          </div>
          <h2 className="font-poppins text-3xl md:text-5xl font-bold mb-4">
            How to <span className="gradient-text">Install</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Follow our simple step-by-step guide to install Summertime Saga MOD APK on your device.
          </p>
        </div>

        {/* Installation Tabs */}
        <div className="max-w-3xl mx-auto">
          <Tabs defaultValue="android" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-muted/50 p-1 rounded-2xl h-auto">
              <TabsTrigger
                value="android"
                className="rounded-xl py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-2"
              >
                <Smartphone className="w-4 h-4" />
                <span className="hidden sm:inline">Android</span>
              </TabsTrigger>
              <TabsTrigger
                value="pc"
                className="rounded-xl py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-2"
              >
                <Monitor className="w-4 h-4" />
                <span className="hidden sm:inline">PC</span>
              </TabsTrigger>
              <TabsTrigger
                value="ios"
                className="rounded-xl py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground gap-2"
              >
                <Apple className="w-4 h-4" />
                <span className="hidden sm:inline">iOS</span>
              </TabsTrigger>
            </TabsList>

            <div className="glass-card rounded-3xl p-6 md:p-8">
              <TabsContent value="android" className="mt-0">
                <TabContent steps={androidSteps} platform="Android" />
              </TabsContent>
              <TabsContent value="pc" className="mt-0">
                <TabContent steps={pcSteps} platform="PC" />
              </TabsContent>
              <TabsContent value="ios" className="mt-0">
                <TabContent steps={iosSteps} platform="iOS" />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default InstallSection;