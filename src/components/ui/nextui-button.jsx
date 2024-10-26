// src/components/nextui-button.jsx
import { Button } from "@nextui-org/button"; // Importing NextUI Button
import { Download } from "lucide-react"; // Import the Download icon

export default function NextUIButton() {
  return (
    <div className="flex flex-wrap gap-4 items-center justify-center mt-8">
      <a href="./assets/Soham Athavale Resume.pdf" download> {/* Use download attribute */}
        <Button
          className="bg-blue-600 text-white shadow-md hover:shadow-lg transition-shadow duration-300 
                     px-10 py-3 rounded-lg flex items-center"
        >
          <Download className="mr-2" /> {/* Icon with margin */}
          Download Report
        </Button>
      </a>
    </div>
  );
}




