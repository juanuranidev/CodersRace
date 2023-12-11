import React, { useEffect, useState } from "react";
import { getLanguagesService } from "services";
import { LanguageCard } from "./components";
import { Loader } from "components";

export default function SelectLanguage({ baseUrl }: any) {
  const [languages, setLanguages] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleGetLanguages = async () => {
    try {
      const response = await getLanguagesService();

      setLanguages(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleGetLanguages();
  }, []);

  if (isLoading) return <Loader />;

  return (
    <div className="container mx-auto px-5">
      <p className="font-semibold text-secondary py-8 text-lg">
        Elige tu lenguage
      </p>
      <div className="grid grid-cols-2 gap-4">
        {languages.map((language: any) => (
          <LanguageCard
            baseUrl={baseUrl}
            key={language?.id}
            language={language}
          />
        ))}
      </div>
    </div>
  );
}
