import {
  faMaximize,
  faMinimize,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function MarzipanoHomePage() {
  const panoRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);
  const [idRuangan, setIdRuangan] = useState(0);
  const scenes = [
    { id: 0, image: "/panos/Panorama-RsMata0.jpg" },
    { id: 1, image: "/panos/Panorama-RsMata1.jpg" },
    { id: 2, image: "/panos/Panorama-RsMata2.jpg" },
    { id: 3, image: "/panos/Panorama-RsMata3.jpg" },
  ];

  const hotspots = {
    0: [
      {
        yaw: -0.5,
        pitch: -0.1,
        label: "Rumah Sakit Mata Makassar ",
        description: "Rumah Sakit Makassar Tallasa City",
      },
    ],
  };

  // const lantai = [
  //   {
  //     id: 0,
  //     name: "Lantai 1",

  //     ruangan: [
  //       "Lobby",
  //       "Loket Pendaftaran",
  //       "Apotek",
  //       "Radiologi",
  //       "IGD",
  //       "Instalasi Farmasi",
  //       "Poliklinik Eksekutif",
  //       "Laboratorium",
  //       "Toilet",
  //     ],
  //   },
  //   {
  //     id: 1,
  //     name: "Lantai 2",

  //     ruangan: [
  //       "Musholla",
  //       "Ruang Refraksi",
  //       "Ruang Administrasi",
  //       "Poliklinik Mata",
  //       "Ruang Penunjang Diagnostik",
  //       "Instalasi Rawat Inap",
  //       "Ruang Tindakan Rawat Jalan",
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Lantai 3",
  //     ruangan: ["ICU", "Instalasi Bedah Sentral", "Ruang Recovery", "CSSD"],
  //   },
  //   {
  //     id: 3,
  //     name: "Lantai 4",
  //     ruangan: [
  //       {
  //         loc: "lokasi 1",
  //         url: "/panos/Panorama-RsMata0.jpg",
  //         hotspot: [
  //           {
  //             yaw: -0.5,
  //             pitch: -0.1,
  //             label: "Rumah Sakit Mata Makassar ",
  //             description: "Rumah Sakit Makassar Tallasa City",
  //           },
  //         ],
  //       },
  //       {
  //         loc: "lokasi 2",
  //         url: "/panos/Panorama-RsMata1.jpg",
  //       },
  //       {
  //         loc: "lokasi 3",
  //         url: "/panos/Panorama-RsMata2.jpg",
  //       },
  //       {
  //         loc: "lokasi4",
  //         url: "/panos/Panorama-RsMata3.jpg",
  //       },
  //     ],
  //   },
  // ];

  const lantai = [
    {
      id: 0,
      name: "Lantai 1",
      ruangan: [
        {
          loc: "Lobby",
          url: "",
          hotspot: [],
        },
        {
          loc: "Loket Pendaftaran",
          url: "",
          hotspot: [],
        },
        {
          loc: "Apotek",
          url: "",
          hotspot: [],
        },
        {
          loc: "Radiologi",
          url: "",
          hotspot: [],
        },
        {
          loc: "IGD",
          url: "",
          hotspot: [],
        },
        {
          loc: "Instalasi Farmasi",
          url: "",
          hotspot: [],
        },
        {
          loc: "Poliklinik Eksekutif",
          url: "",
          hotspot: [],
        },
        {
          loc: "Laboratorium",
          url: "",
          hotspot: [],
        },
        {
          loc: "Toilet",
          url: "",
          hotspot: [],
        },
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
        { loc: "ICU", url: "", hotspot: [] },
        { loc: "Instalasi Bedah Sentral", url: "", hotspot: [] },
        { loc: "Ruang Recovery", url: "", hotspot: [] },
        { loc: "CSSD", url: "", hotspot: [] },
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
        {
          loc: "lokasi 2",
          url: "/panos/Panorama-RsMata1.jpg",
          hotspot: [],
        },
        {
          loc: "lokasi 3",
          url: "/panos/Panorama-RsMata2.jpg",
          hotspot: [],
        },
        {
          loc: "lokasi 4",
          url: "/panos/Panorama-RsMata3.jpg",
          hotspot: [],
        },
      ],
    },
  ];

  const scenesRef = useRef([]);

  const handleSwitchScene = (index) => {
    scenesRef.current[index].switchTo();
    setShowModal(false); // biar modal langsung tutup
  };

  const findLantai = lantai?.find((lantai) => lantai.id === idRuangan)?.ruangan;

  useEffect(() => {
    let MarzipanoLib = null;

    import("marzipano").then((m) => {
      MarzipanoLib = m.default;

      if (!panoRef.current || !MarzipanoLib) return;

      const viewer = new MarzipanoLib.Viewer(panoRef.current);

      const createdScenes = scenes.map((scene, index) => {
        const source = MarzipanoLib.ImageUrlSource.fromString(scene.image);
        const geometry = new MarzipanoLib.EquirectGeometry([{ width: 4096 }]);

        const limiter = MarzipanoLib.RectilinearView.limit.traditional(
          4096,
          (100 * Math.PI) / 180,
        );

        const view = new MarzipanoLib.RectilinearView({}, limiter);

        // === BUAT SCENE ===
        const created = viewer.createScene({ source, geometry, view });

        // === AMBIL HOTSPOT UNTUK SCENE INI ===
        const hotspotList = hotspots[index] || [];

        hotspotList.forEach((spot) => {
          // === BUNGKUS HOTSPOT (container) ===
          const wrapper = document.createElement("div");
          wrapper.className = "relative";

          // === ICON HOTSPOT ===
          const icon = document.createElement("div");
          icon.className =
            "w-7 h-7 bg-blue-600 text-white text-sm flex items-center justify-center rounded-full cursor-pointer shadow-lg";
          icon.innerText = "i";

          // === TOOLTIP (DISEMBUNYIKAN DULU) ===
          const tooltip = document.createElement("div");
          tooltip.className =
            "hidden absolute left-8 top-1 bg-white text-black p-2 rounded-lg shadow-xl text-xs w-[150px] border border-gray-300 z-50";
          tooltip.innerHTML = `<b>${spot.label}</b><br>${spot.description}`;

          // === CLICK UNTUK SHOW/HIDE ===
          icon.addEventListener("click", () => {
            tooltip.classList.toggle("hidden");
          });

          // MASUKKAN ICON + TOOLTIP KE DALAM WRAPPER
          wrapper.appendChild(icon);
          wrapper.appendChild(tooltip);

          // === TEMPATKAN HOTSPOT DI PANORAMA ===
          created
            .hotspotContainer()
            .createHotspot(wrapper, { yaw: spot.yaw, pitch: spot.pitch });
        });

        return created;
      });

      createdScenes[0].switchTo();
      scenesRef.current = createdScenes;
    });
  }, []);

  useEffect(() => {
    if (!scenesRef.current.length) return;

    const viewer = scenesRef.current[0].viewer();

    // Recalculate Marzipano size & view when fullscreen changes
    setTimeout(() => {
      viewer.updateSize();
      scenesRef.current.forEach((s) => {
        try {
          s.view().setParameters({});
        } catch (_) {}
      });
    }, 50);
  }, [fullScreen]);

  return (
    <div className="">
      <div
        className={`relative ${fullScreen ? "w-screen h-screen" : "w-[60em] h-[40em] m-auto my-4  "}`}
      >
        {/* MARZIPANO VIEWER */}
        <div
          ref={panoRef}
          className={`w-full h-full marzipano-container ${!fullScreen && "rounded-2xl"}`}
        />

        <div className="absolute top-5 left-5 flex gap-2">
          <button
            onClick={() => setShowModal(true)}
            className=" bg-blue-600 text-white px-4 py-2 rounded-xl shadow-lg cursor-pointer"
            style={{ zIndex: 10 }}
          >
            Pilih Lokasi
          </button>
          {fullScreen ? (
            <>
              <button
                onClick={() => setFullScreen(false)}
                className="  text-white rounded-lg text-lg bg-green-600 px-2  shadow-lg"
                style={{ zIndex: 10 }}
              >
                {" "}
                <FontAwesomeIcon icon={faMinimize} />
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setFullScreen(true)}
                className=" text-white rounded-lg text-lg bg-green-600 px-2  shadow-lg"
                style={{ zIndex: 10 }}
              >
                {" "}
                <FontAwesomeIcon icon={faMaximize} />
              </button>
            </>
          )}
        </div>

        {showModal && (
          <div className=" w-full h-full absolute top-0 bottom-0 z-50 flex items-center justify-center bg-black/50">
            <div
              className={`max-h-[90vh] ${fullScreen ? "w-2/4" : "w-3/4"} overflow-y-auto rounded-xl bg-white p-2 text-sm`}
            >
              <div className=" flex items-center justify-between rounded-xl p-4 shadow-sm">
                <h2 className="text-xl font-bold text-[#333333]">
                  Pilih Ruangan
                </h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-xl font-semibold text-gray-500 hover:text-gray-700"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="w-full flex gap-2 my-5 justify-center">
                {lantai?.map((item) => (
                  <button
                    key={item?.id}
                    className={`w-1/3 bg-gray-400 hover:bg-gray-600 py-2 text-white rounded-lg cursor-pointer`}
                    onClick={() => setIdRuangan(item.id)}
                  >
                    <p>{item?.name}</p>
                  </button>
                ))}
              </div>
              <div className="w-full grid  grid-cols-3 gap-2">
                {findLantai.map((item, index) => (
                  <p
                    key={index}
                    className="bg-blue-400 text-center py-2 text-white rounded-xl cursor-pointer hover:bg-blue-600"
                  >
                    {item.loc}
                  </p>
                ))}
              </div>

              {/* <ul className="space-y-2 w-full text-center my-5">
                {scenes.map((s, index) => (
                  <li
                    key={s.id}
                    onClick={() => handleSwitchScene(index)}
                    className="cursor-pointer hover:text-blue-600"
                  >
                    lokasi {index + 1}
                  </li>
                ))}
              </ul> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
