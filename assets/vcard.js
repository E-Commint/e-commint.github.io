function downloadVCard(person) {
  const lines = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `N:${person.lastName};${person.firstName};;;`,
    `FN:${person.firstName} ${person.lastName}`,
    `ORG:${person.org}`,
    `EMAIL;TYPE=INTERNET,WORK:${person.email}`,
    `URL;TYPE=LinkedIn:https://www.linkedin.com/in/${person.linkedin}`,
    `URL;TYPE=Website:${person.website}`,
    "END:VCARD"
  ];

  const vcfContent = lines.join("\r\n");
  const blob = new Blob([vcfContent], { type: "text/vcard;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `${person.firstName}_${person.lastName}.vcf`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
