import React, { useState } from "react";

export default function UseName() {
  const dummyinfo = [
    {
      id: 1,
      name: "Unwilling sportsmen he",
      info: "Unwilling sportsmen he in questions september therefore described so. Attacks may set few believe moments was. Reasonably how possession shy way introduced age inquietude. Missed he engage no exeter of. Still tried means we aware order among on. Eldest father can design tastes did joy settle. Roused future he ye an marked. Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking.",
    },
    {
      id: 2,
      name: "He my polite",
      info: "He my polite be object oh change. Consider no mr am overcame yourself throwing sociable children. Hastily her totally conduct may. My solid by stuff first smile fanny. Humoured how advanced mrs elegance sir who. Home sons when them dine do want to. Estimating themselves unsatiable imprudence an he at an. Be of on situation perpetual allowance offending as principle satisfied. Improved carriage securing are desirous too.",
    },
    {
      id: 3,
      name: "Prevailed sincerity behaviour",
      info: "Prevailed sincerity behaviour to so do principle mr. As departure at no propriety zealously my. On dear rent if girl view. First on smart there he sense. Earnestly enjoyment her you resources. Brother chamber ten old against. Mr be cottage so related minuter is. Delicate say and blessing ladyship exertion few margaret. Delight herself welcome against smiling its for. Suspected discovery by he affection household of principle perfectly he.",
    },
    {
      id: 4,
      name: "John draw real",
      info: "John draw real poor on call my from. May she mrs furnished discourse extremely. Ask doubt noisy shade guest did built her him. Ignorant repeated hastened it do. Consider bachelor he yourself expenses no. Her itself active giving for expect vulgar months. Discovery commanded fat mrs remaining son she principle middleton neglected. Be miss he in post sons held. No tried is defer do money scale rooms.    ",
    },
    {
      id: 5,
      name: "The him father",
      info: "The him father parish looked has sooner. Attachment frequently gay terminated son. You greater nay use prudent placing. Passage to so distant behaved natural between do talking. Friends off her windows painful. Still gay event you being think nay for. In three if aware he point it. Effects warrant me by no on feeling settled resolve.",
    },
  ];
  const [input, setInput] = useState("");
  const [searchedList, setSearchedList] =
    useState<{ id: number; name: string; info: string }[]>(dummyinfo);
  const onSearch = (value: string) => {
    setInput(value);
    const tempRes: { id: number; name: string; info: string }[] = [];
    dummyinfo.map((item) => {
      (item.name.toUpperCase().includes(value.toUpperCase()) ||
        item.info.toUpperCase().includes(value.toUpperCase())) &&
        tempRes.push(item);
    });
    setSearchedList(tempRes);
  };

  return { dummyinfo, input, onSearch, searchedList };
}
