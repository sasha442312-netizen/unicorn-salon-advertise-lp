import Image from "next/image";

export default function ProblemDiagnosis() {
  return (
    <section className="bg-(--color-bg) px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-md overflow-hidden rounded-3xl shadow-sm sm:max-w-lg">
        <Image
          src="/mockups/problem-diagnosis.jpg"
          alt="集客がうまくいかない、本当の原因。その原因は、施策がバラバラだから。HOT PEPPER・Instagram・Google・LINE・Meta広告がそれぞれ別々に動いていて、予約につながる流れになっていない。必要なのは施策を増やすことではなく、今ある施策を予約につながる流れにすること。"
          width={941}
          height={1672}
          className="h-auto w-full"
        />
      </div>
    </section>
  );
}
