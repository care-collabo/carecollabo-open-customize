if (window.location.pathname === "/ep") {
  window.addEventListener("load", function () {
    
    var container = document.createElement("div");
    container.setAttribute("style", "margin-top: 70px;");

    container.innerHTML = `
      <!-- クリックで開くブロック -->
      <div 
        id="openDesignModal"
        style="
          background-color: #fff8de;
          padding: 15px;
          text-align: center;
          cursor: pointer;
          border-radius: 6px;
          font-weight: bold;
          border: 1px solid #eee;
          transition: background-color 0.2s ease;
          line-height: 1.75rem;
        "
      >
        【ケアコラボからのお知らせ】<br>＼ デザインリニューアル第１弾 ／<br>11/19(水)〜 ケアコラボのデザインが一部新しくなります！
      </div>

      <!-- モーダル要素 -->
      <div 
        id="designModal"
        style="
          display: none;
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          justify-content: center;
          align-items: center;
          z-index: 9999;
        "
      >
        <div 
          id="modalContent"
          style="
            background: white;
            padding: 20px;
            border-radius: 8px;
            max-width: 800px;
            width: 90%;
            text-align: center;
            box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            position: relative;
            transform: scale(0.95);
            opacity: 0;
            transition: all 0.25s ease;
          "
        >
          <span 
            id="closeDesignModal"
            style="
              position: absolute;
              top: 10px;
              right: 15px;
              font-size: 20px;
              color: #555;
              cursor: pointer;
            "
          >&times;</span>

          <p id="designModalTitle" style="font-size: 1.4rem; color: #0083bc; font-weight: bold; margin: 18px auto 24px auto;">
            ＼ ケアコラボのデザインが新しくなります！ ／
          </p>
          <img 
            src="https://care-collabo.github.io/carecollabo-open-customize/img/design-update-1.gif" 
            alt="ケアコラボ新デザインの画像" 
            style="max-width: 100%; height: auto; border-radius: 4px; margin-bottom: 30px;"
          >
          <p id="designModalText" style="font-size: 1.1rem; color: #555;">
            ケアコラボをより快適にご利用いただけるよう、<br>デザインを改善いたします。<br><br>
            【11/19(水)〜】に公開を予定しています。<br><br>
            詳細は<a href="https://page.carecollabo.jp/blogs/newdesign_1/" target="_blank">こちら</a>のお知らせをご確認ください。
          </p>
        </div>
      </div>
    `;

    // main-content の先頭に挿入
    $(".main-content").prepend($(container));

    // 要素取得
    const openBtn = container.querySelector("#openDesignModal");
    const modal = container.querySelector("#designModal");
    const modalContent = container.querySelector("#modalContent");
    const closeBtn = container.querySelector("#closeDesignModal");

    // ホバー効果
    openBtn.addEventListener("mouseenter", () => {
      openBtn.style.backgroundColor = "#fff3c6";
    });
    openBtn.addEventListener("mouseleave", () => {
      openBtn.style.backgroundColor = "#fff8de";
    });

    // 開く
    openBtn.addEventListener("click", function () {
      modal.style.display = "flex";
      document.body.style.overflow = "hidden"; // 背景スクロール禁止
      setTimeout(() => {
        modalContent.style.opacity = "1";
        modalContent.style.transform = "scale(1)";
      }, 10);
    });

    // 閉じる
    function closeModal() {
      modalContent.style.opacity = "0";
      modalContent.style.transform = "scale(0.95)";
      setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "";
      }, 200);
    }

    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", function (e) {
      if (e.target === modal) closeModal();
    });

    if (window.innerWidth <= 768) {
      const title = container.querySelector("#designModalTitle");
      const text = container.querySelector("#designModalText");
      openBtn.style.fontSize = "0.9rem";
      if (title) title.style.fontSize = "0.95rem";
      if (text) text.style.fontSize = "0.9rem";
    }
  });
}

