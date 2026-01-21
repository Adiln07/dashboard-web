import { NextApiRequest, NextApiResponse } from "next";

type Hotspot = {
  yaw: number;
  pitch: number;
  label: string;
  description: string;
};

type Ruangan = {
  loc: string;
  url: string;
  hotspot: Hotspot[];
};

type Data = {
  id: number;
  name: string;
  ruangan: Ruangan[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>,
) {
  res.status(200).json([
    {
      id: 0,
      name: "Lantai 1",
      ruangan: [
        { loc: "Lobby", url: "", hotspot: [] },
        { loc: "Loket Pendaftaran", url: "", hotspot: [] },
        { loc: "Apotek", url: "", hotspot: [] },
        { loc: "Radiologi", url: "", hotspot: [] },
        { loc: "IGD", url: "", hotspot: [] },
        { loc: "Instalasi Farmasi", url: "", hotspot: [] },
        { loc: "Poliklinik Eksekutif", url: "", hotspot: [] },
        { loc: "Laboratorium", url: "", hotspot: [] },
        { loc: "Toilet", url: "", hotspot: [] },
      ],
    },

    {
      id: 1,
      name: "Lantai 2",
      ruangan: [
        { loc: "Musholla", url: "", hotspot: [] },
        { loc: "Ruang Refraksi", url: "", hotspot: [] },
        { loc: "Ruang Administrasi", url: "", hotspot: [] },
        { loc: "Poliklinik Mata", url: "", hotspot: [] },
        { loc: "Ruang Penunjang Diagnostik", url: "", hotspot: [] },
        { loc: "Instalasi Rawat Inap", url: "", hotspot: [] },
        { loc: "Ruang Tindakan Rawat Jalan", url: "", hotspot: [] },
      ],
    },

    {
      id: 2,
      name: "Lantai 3",
      ruangan: [
        {
          loc: "Bernabeu 1",
          url: "/panos/bernabue/bernabeu-1.jpg",
          hotspot: [],
        },
        {
          loc: "Bernabeu 2",
          url: "/panos/bernabue/bernabeu-2.jpg",
          hotspot: [],
        },
        {
          loc: "Bernabeu 3",
          url: "/panos/bernabue/bernabeu-3.jpg",
          hotspot: [],
        },
        {
          loc: "Bernabeu 4",
          url: "/panos/bernabue/bernabeu-4.jpg",
          hotspot: [],
        },
        {
          loc: "Bernabeu 5",
          url: "/panos/bernabue/bernabeu-5.jpg",
          hotspot: [],
        },
      ],
    },

    {
      id: 3,
      name: "Lantai 4",
      ruangan: [
        {
          loc: "lokasi 1",
          url: "/panos/Panorama-RsMata0.jpg",
          hotspot: [
            {
              yaw: -0.5,
              pitch: -0.1,
              label: "Rumah Sakit Mata Makassar",
              description: "Rumah Sakit Makassar Tallasa City",
            },
          ],
        },
        { loc: "lokasi 2", url: "/panos/Panorama-RsMata1.jpg", hotspot: [] },
        { loc: "lokasi 3", url: "/panos/Panorama-RsMata2.jpg", hotspot: [] },
        { loc: "lokasi 4", url: "/panos/Panorama-RsMata3.jpg", hotspot: [] },
      ],
    },
  ]);
}
