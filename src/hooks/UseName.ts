import { useState } from "react";

export default function UseName() {
  const dummyNames = [
    { id: 1, name: "phvbjyzg8", email: "phvbjyzg8@gmail.com" },
    { id: 2, name: "uditblaq61", email: "uditblaq61@gmail.com" },
    { id: 3, name: "hoiijger2", email: "hoiijger2@gmail.com" },
    { id: 4, name: "vhztoblp40", email: "vhztoblp40@gmail.com" },
    { id: 5, name: "ytbvclye26", email: "ytbvclye26@gmail.com" },
    { id: 6, name: "cbodlpgk63", email: "cbodlpgk63@gmail.com" },
    { id: 7, name: "uomwuyru39", email: "uomwuyru39@gmail.com" },
    { id: 8, name: "nbxhqreu96", email: "nbxhqreu96@gmail.com" },
    { id: 9, name: "kapysddn92", email: "kapysddn92@gmail.com" },
    { id: 10, name: "qqueveov72", email: "qqueveov72@gmail.com" },
    { id: 11, name: "ftikpybx56", email: "ftikpybx56@gmail.com" },
    { id: 12, name: "mcehgzoy84", email: "mcehgzoy84@gmail.com" },
    { id: 13, name: "ziedkyfg1", email: "ziedkyfg1@gmail.com" },
    { id: 14, name: "fqwrhkwi89", email: "fqwrhkwi89@gmail.com" },
    { id: 15, name: "zucyqatm23", email: "zucyqatm23@gmail.com" },
    { id: 16, name: "llmoymzs91", email: "llmoymzs91@gmail.com" },
    { id: 17, name: "qnlwlaus92", email: "qnlwlaus92@gmail.com" },
    { id: 18, name: "mvfncdnh1", email: "mvfncdnh1@gmail.com" },
    { id: 19, name: "monteefe35", email: "monteefe35@gmail.com" },
    { id: 20, name: "brhekubp35", email: "brhekubp35@gmail.com" },
  ];
  const [input, setInput] = useState("");
  const [searchedList, setSearchedList] =
    useState<{ id: number; name: string; email: string }[]>(dummyNames);
  const onSearch = (value: string) => {
    setInput(value);
    const tempRes: { id: number; name: string; email: string }[] = [];
    dummyNames.map((item) => {
      (item.name.toUpperCase().includes(value.toUpperCase()) ||
        item.email.toUpperCase().includes(value.toUpperCase())) &&
        tempRes.push(item);
    });
    setSearchedList(tempRes);
  };

  return { dummyNames, input, onSearch, searchedList };
}
