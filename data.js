window.manifestSeries = {};

// ================== СЕРИЯ 1 ==================
window.manifestSeries[1] = {
  id: 1,
  title: "CHAT_CONTROL_ILLUSION",
  duration: 15,
  timeline: [
    { time: 0.0, text: "Они называют это 'Чат-контроль'.\nВстроить лазейку в шифрование ради 'безопасности'.", trigger: null, visual: "scanning_lines" },
    { time: 4.0, text: "Но преступников это не остановит.\nВ эпоху ИИ они напишут свой мессенджер за один вечер.", trigger: "GLITCH", visual: "falling_code" },
    { time: 7.0, text: "В опасности окажешься ТЫ, {{USER_NAME}}.\nПриватность отнимут у обычных граждан, а не у преступников.", trigger: "IMPACT", visual: "user_silhouette" },
    { time: 11.0, text: "Математику нельзя коррумпировать.\nMTProto. Держи строй.", trigger: "FLASH", visual: "shield_hex" }
  ]
};

// ================== СЕРИЯ 2 ==================
window.manifestSeries[2] = {
  id: 2,
  title: "INFRASTRUCTURE_SOVEREIGNTY",
  duration: 15,
  timeline: [
    { time: 0.0, text: "Большинство современных ИТ-стартапов живут в долг.\nОни арендуют сервера у Amazon AWS, Google Cloud или Azure.", trigger: null, visual: "cloud_silhouettes" },
    { time: 4.0, text: "Но один щелчок регулятора — и вас выключили из розетки.\nЦифровая смерть за долю секунды.", trigger: "GLITCH", visual: "power_switch_off" },
    { time: 8.0, text: "Мы не доверяем чужим облакам.\nВся сеть Telegram работает на собственном железе в 5 зонах планеты.", trigger: "IMPACT", visual: "dc_nodes_map" },
    { time: 11.0, text: "Суверенная архитектура.\nЕсли ломается интернет, наш узел должен выстоять.", trigger: "FLASH", visual: "monolith_shield" }
  ]
};

// ================== СЕРИЯ 3 ==================
window.manifestSeries[3] = {
  id: 3,
  title: "AI_TOTAL_SURVEILLANCE",
  duration: 15,
  timeline: [
    { time: 0.0, text: "Раньше у слежки был человеческий предел.\nУ КГБ или ФБР не хватало рук, чтобы прочитать каждое письмо.", trigger: null, visual: "envelope_ascii" },
    { time: 4.0, text: "В эпоху ИИ этой роскоши больше нет.\nКаждое незашифрованное сообщение будет проанализировано за микросекунду.", trigger: "GLITCH", visual: "ai_eye_mesh" },
    { time: 8.0, text: "Каждый твой черновик, лайк и связь получат оценку.\nБудущее станет мрачнее любой антиутопии.", trigger: "IMPACT", visual: "user_network_map" },
    { time: 12.0, text: "Шифрование — это не преступление.\nЭто твое право на чистый цифровой след.", trigger: "FLASH", visual: "lock_closed" }
  ]
};
// ================== СЕРИЯ 4 ==================
window.manifestSeries[4] = {
  id: 4,
  title: "CODE_ON_LOW_END_DEVICES",
  duration: 14,
  timeline: [
    { time: 0.0, text: "Написать приложение, которое плавно работает на последнем iPhone, может любой студент.", trigger: null, visual: "grid_slow" },
    { time: 4.0, text: "Заставить каналы-миллионники ЛЕТАТЬ на старом Android за 50 долларов — вот инженерный вызов.", trigger: "GLITCH", visual: "wireframe_phone" },
    { time: 8.0, text: "Чистый С++ без тяжелого корпоративного JS-мусора.\nРаботает на одном делении связи, когда всё остальное виснет.", trigger: "IMPACT", visual: "signal_bar_1" },
    { time: 11.0, text: "Скорость — это религия.\nTelegram Infrastructure.", trigger: "FLASH", visual: "monolith_logo" }
  ]
};

// ================== СЕРИЯ 5 ==================
window.manifestSeries[5] = {
  id: 5,
  title: "IN_MEMORY_RELIGION",
  duration: 15,
  timeline: [
    { time: 0.0, text: "Как переваривать миллиарды сообщений в секунду?\nСтандартные MySQL или PostgreSQL умрут под такой нагрузкой.", trigger: null, visual: "database_error_stack" },
    { time: 4.0, text: "Наши инженеры написали собственные NoSQL движки.\nВся база данных крутится прямо в оперативной памяти серверов.", trigger: "GLITCH", visual: "ram_chips_wireframe" },
    { time: 8.0, text: "Мгновенный отклик — это уважение к пользователю.\nИнтерфейс должен реагировать быстрее, чем палец касается экрана.", trigger: "IMPACT", visual: "speed_pulses" },
    { time: 12.0, text: "На диски сбрасываются только логи.\nСкорость — это наша религия.", trigger: "FLASH", visual: "lightning_icon" }
  ]
};

// ================== СЕРИЯ 6 ==================
window.manifestSeries[6] = {
  id: 6,
  title: "MTPROTO_PACKET_ANATOMY",
  duration: 14,
  timeline: [
    { time: 0.0, text: "Пока другие мессенджеры гоняют тяжелые веб-пакеты,\nзаставляя телефон ждать ответа от сервера...", trigger: null, visual: "slow_packet_loading" },
    { time: 3.0, text: "Мы оптимизировали каждый байт в сетевом пакете.\nПротокол MTProto создан для критических условий связи.", trigger: "GLITCH", visual: "binary_stream" },
    { time: 7.0, text: "Минимум 'рукопожатий' (round-trips) между клиентом и сервером.\nСообщение улетает за один сетевой пакет.", trigger: "IMPACT", visual: "single_pulse_wave" },
    { time: 11.0, text: "Быстрый, как автоматный выстрел.\nTelegram Infrastructure.", trigger: "FLASH", visual: "monolith_logo" }
  ]
};
// ================== СЕРИЯ 7 ==================
window.manifestSeries[7] = {
  id: 7,
  title: "SELECTIVE_LAW_TRAP",
  duration: 15,
  timeline: [
    { time: 0.0, text: "Сначала они вводят тысячи законов.\nПерегружают ИТ-отрасль противоречивым регулированием.", trigger: null, visual: "overlapping_text_blocks" },
    { time: 4.0, text: "Соблюдать ВСЁ становится физически невозможно.\nТеперь любого инженера и создателя можно объявить преступником.", trigger: "GLITCH", visual: "warning_brackets" },
    { time: 8.0, text: "А затем власть аккуратно выбирает, кого преследовать.\nЛояльным — прощают всё. Независимых — уничтожают.", trigger: "IMPACT", visual: "target_reticle" },
    { time: 12.0, text: "Мы отказались от тайных сделок с разведками.\nКод должен оставаться чистым. Telegram.", trigger: "FLASH", visual: "monolith_shield" }
  ]
};

// ================== СЕРИЯ 8 ==================
window.manifestSeries[8] = {
  id: 8,
  title: "ALGORITHMIC_SLAVERY",
  duration: 15,
  timeline: [
    { time: 0.0, text: "Нейросети крупных платформ изучают твои слабости.\nОни подсовывают 'рекомендации', чтобы удержать твой взгляд.", trigger: null, visual: "infinite_scrolling_feed" },
    { time: 4.0, text: "Это не контент. Это цифровая клетка,\nгде твое внимание продают рекламодателям.", trigger: "GLITCH", visual: "cage_matrix" },
    { time: 8.0, text: "Telegram убрал алгоритмическую ленту.\nТы видишь ТОЛЬКО то, на что подписался сам.", trigger: "IMPACT", visual: "clean_horizontal_waves" },
    { time: 12.0, text: "Тишина и контроль над собственным разумом.\nСвобода от алгоритмов.", trigger: "FLASH", visual: "eye_open_mesh" }
  ]
};

// ================== СЕРИЯ 9 ==================
window.manifestSeries[9] = {
  id: 9,
  title: "THE_LAST_NODE",
  duration: 15,
  timeline: [
    { time: 0.0, text: "Второй цивилизации или запасного Запада не существует.\nБежать больше некуда.", trigger: null, visual: "globe_wireframe_slow" },
    { time: 4.0, text: "Если централизованный веб окончательно пойдет ко дну,\nмир превратится в тюрьму под открытым небом.", trigger: "GLITCH", visual: "fading_connections" },
    { time: 8.0, text: "Мы строили эту систему как гоночный болид.\nЧтобы она пробивала блокировки на одном делении связи.", trigger: "IMPACT", visual: "single_bright_node" },
    { time: 12.0, text: "Когда сломается привычный интернет,\nостанется Telegram. Держи строй, {{USER_NAME}}.", trigger: "FLASH", visual: "monolith_logo" }
  ]
};

// ================== ПРИВЯЗКА ВСЕХ СЕРИЙ К КНОПКАМ ИНТЕРФЕЙСА ==================
document.querySelectorAll('.series-btn').forEach(btn => {
  const newBtn = btn.cloneNode(true);
  btn.parentNode.replaceChild(newBtn, btn);
});

document.querySelectorAll('.series-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const id = parseInt(btn.dataset.series, 10);
    if (window.manifestSeries && window.manifestSeries[id]) {
      window.loadAndPlaySeries(window.manifestSeries[id]);
    } else {
      alert('Эта серия ещё на стадии компиляции...');
    }
  });
});
