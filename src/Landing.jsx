
import { motion } from "framer-motion";

export default function EggsCoinLanding() {
  const contractAddress = "0x123abc456789def0123456789abcdef123456789";

  return (
    <div className="min-h-screen bg-yellow-50 p-6 text-center flex flex-col justify-center items-center space-y-8">
      <motion.img
        src="/eggscoin-logo.png"
        alt="EggsCoin Logo"
        className="w-6 h-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6 }}
      />
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        EggsCoin: De Huevo a Gallina
      </motion.h1>

      <motion.p
        className="max-w-2xl text-lg md:text-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        EggsCoin no es solo un token. Es una historia. Una evolución. Una aventura cripto desde el cascarón hasta el corral.
      </motion.p>

      <motion.div
        className="text-3xl md:text-5xl"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        🐣 ➡️ 🐓 ➡️ 👑
      </motion.div>

      <motion.div
        className="max-w-xl text-md md:text-lg text-gray-700 space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <p><strong>Gallinita:</strong> Menos de 10,000 EGGs.</p>
        <p><strong>Gallina:</strong> Entre 10,000 y 499,999 EGGs.</p>
        <p><strong>SuperGallina:</strong> Más de 500,000 EGGs.</p>
      </motion.div>

      <motion.div
        className="pt-6 space-y-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <a
          href={`https://pancakeswap.finance/swap?outputCurrency=${contractAddress}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="text-lg px-6 py-3 rounded-2xl shadow-lg bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-xl">
            Comprar en PancakeSwap
          </button>
        </a>
        <div>
          <p className="text-sm text-gray-600 mt-2">Contrato: <code>{contractAddress}</code></p>
        </div>
      </motion.div>
    </div>
  );
}
