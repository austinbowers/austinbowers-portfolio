import Formcarry from "@/app/ui/global/formcarry"

export default function Contact() {
    return (
        <div className={`max-w-screen-md mx-auto px-6 pb-48`}>
            <h2 className={`h2 mb-4 text-center`}>Contact Me</h2>
            <p className="mb-8 lg:mb-10 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                If you would like to get in touch or have any questions, please fill out the form below.</p>
            <Formcarry/>
        </div>
    );
}