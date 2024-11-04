import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type Props = {
    error: string;
}

export const ErrorMessage = ({error}:Props) => {
    return (
        <Alert variant={"destructive"} className="flex gap-3 items-center">
                    <div className="size-4 rounded-full bg-red-500"></div>
                    <div>
                        <AlertTitle>Erro!</AlertTitle>
                        <AlertDescription>{error}</AlertDescription>
                    </div>
                </Alert>
    );
}