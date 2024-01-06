const commonTexts = {
  signIn: {
    phoneCode: {
      title: "電話を確認してください",
      subtitle: "{{applicationName}} へのアクセス",
      formTitle: "検証コード",
      formSubtitle: "携帯電話番号に送信された検証コードを入力してください",
      resendButton: "コードを再送信",
    },
  },
} as const;

export const customLocalization = {
  locale: "customLocalization",
  socialButtonsBlockButton: "{{provider|titleize}}で続ける",
  dividerText: "または",
  formFieldLabel__emailAddress: "メールアドレス",
  formFieldLabel__emailAddresses: "メールアドレス",
  formFieldLabel__phoneNumber: "電話番号",
  formFieldLabel__username: "ユーザー名",
  formFieldLabel__emailAddress_username: "メールアドレスまたはユーザー名",
  formFieldLabel__password: "パスワード",
  formFieldLabel__currentPassword: "現在のパスワード",
  formFieldLabel__newPassword: "新しいパスワード",
  formFieldLabel__confirmPassword: "パスワードの確認",
  formFieldLabel__signOutOfOtherSessions: "他のデバイスからサインアウト",
  formFieldLabel__firstName: "名",
  formFieldLabel__lastName: "姓",
  formFieldLabel__backupCode: "バックアップコード",
  formFieldLabel__organizationName: "組織名",
  formFieldLabel__organizationSlug: "スラグURL",
  formFieldLabel__role: "役割",
  formFieldInputPlaceholder__emailAddress: "",
  formFieldInputPlaceholder__emailAddresses:
    "スペースまたはカンマで区切って、1つ以上のメールアドレスを入力または貼り付けてください",
  formFieldInputPlaceholder__phoneNumber: "",
  formFieldInputPlaceholder__username: "",
  formFieldInputPlaceholder__emailAddress_username: "",
  formFieldInputPlaceholder__password: "",
  formFieldInputPlaceholder__firstName: "",
  formFieldInputPlaceholder__lastName: "",
  formFieldInputPlaceholder__backupCode: "",
  formFieldInputPlaceholder__organizationName: "",
  formFieldInputPlaceholder__organizationSlug: "",
  formFieldError__notMatchingPasswords: "パスワードが一致しません。",
  formFieldError__matchingPasswords: "パスワードが一致します。",
  formFieldAction__forgotPassword: "パスワードをお忘れですか？",
  formFieldHintText__optional: "任意",
  formButtonPrimary: "続ける",
  signInEnterPasswordTitle: "パスワードを入力してください",
  backButton: "戻る",
  footerActionLink__useAnotherMethod: "別の方法を使用する",
  badge__primary: "プライマリ",
  badge__thisDevice: "このデバイス",
  badge__userDevice: "ユーザーデバイス",
  badge__otherImpersonatorDevice: "他の模倣者デバイス",
  badge__default: "デフォルト",
  badge__unverified: "未確認",
  badge__requiresAction: "アクションが必要",
  badge__you: "あなた",
  footerPageLink__help: "ヘルプ",
  footerPageLink__privacy: "プライバシー",
  footerPageLink__terms: "利用規約",
  paginationButton__previous: "前へ",
  paginationButton__next: "次へ",
  paginationRowText__displaying: "表示中",
  paginationRowText__of: "全",
  membershipRole__admin: "管理者",
  membershipRole__basicMember: "メンバー",
  membershipRole__guestMember: "ゲスト",
  signUp: {
    start: {
      title: "アカウントを作成",
      subtitle: "{{applicationName}}へのアクセス",
      actionText: "アカウントをお持ちですか？",
      actionLink: "サインイン",
    },
    emailLink: {
      title: "メールアドレスを確認",
      subtitle: "{{applicationName}}へのアクセス",
      formTitle: "確認リンク",
      formSubtitle: "メールアドレスに送信された確認リンクを使用してください",
      resendButton: "リンクを再送信",
      verified: {
        title: "登録が完了しました",
      },
      loading: {
        title: "登録中...",
      },
      verifiedSwitchTab: {
        title: "メールアドレスが正常に確認されました",
        subtitle: "続行するために新しく開いたタブに戻ってください",
        subtitleNewTab: "続行するために前のタブに戻ってください",
      },
    },
    emailCode: {
      title: "メールアドレスを確認",
      subtitle: "{{applicationName}}へのアクセス",
      formTitle: "確認コード",
      formSubtitle: "メールアドレスに送信された確認コードを入力してください",
      resendButton: "コードを再送信",
    },
    phoneCode: {
      title: "電話番号を確認",
      subtitle: "{{applicationName}}へのアクセス",
      formTitle: "確認コード",
      formSubtitle: "電話番号に送信された確認コードを入力してください",
      resendButton: "コードを再送信",
    },
    continue: {
      title: "未入力のフィールドを入力",
      subtitle: "{{applicationName}}へのアクセス",
      actionText: "アカウントをお持ちですか？",
      actionLink: "サインイン",
    },
  },
  signIn: {
    start: {
      title: "サインイン",
      subtitle: "{{applicationName}}へのアクセス",
      actionText: "アカウントをお持ちでないですか？",
      actionLink: "サインアップ",
      actionLink__use_email: "メールアドレスを使用",
      actionLink__use_phone: "電話番号を使用",
      actionLink__use_username: "ユーザー名を使用",
      actionLink__use_email_username: "メールアドレスまたはユーザー名を使用",
    },
    password: {
      title: "パスワードを入力",
      subtitle: "{{applicationName}}へのアクセス",
      actionLink: "別の方法を使用",
    },
    forgotPasswordAlternativeMethods: {
      title: "パスワードをお忘れですか？",
      label__alternativeMethods: "または、別の方法でサインインしてください。",
      blockButton__resetPassword: "パスワードをリセット",
    },
    forgotPassword: {
      title_email: "メールを確認",
      title_phone: "電話を確認",
      subtitle: "パスワードをリセットするために",
      formTitle: "パスワードリセットコード",
      formSubtitle_email: "メールアドレスに送信されたコードを入力してください",
      formSubtitle_phone: "電話番号に送信されたコードを入力してください",
      resendButton: "コードを再送信",
    },
    resetPassword: {
      title: "パスワードをリセット",
      formButtonPrimary: "パスワードをリセット",
      successMessage:
        "パスワードが正常に変更されました。お待ちください、サインインしています。",
    },
    resetPasswordMfa: {
      detailsLabel:
        "パスワードをリセットする前に、身元を確認する必要があります。",
    },
    emailCode: {
      title: "メールを確認",
      subtitle: "{{applicationName}}へのアクセス",
      formTitle: "検証コード",
      formSubtitle: "メールアドレスに送信された検証コードを入力してください",
      resendButton: "コードを再送信",
    },
    emailLink: {
      title: "メールを確認",
      subtitle: "{{applicationName}}へのアクセス",
      formTitle: "検証リンク",
      formSubtitle: "メールに送信された検証リンクを使用してください",
      resendButton: "リンクを再送信",
      unusedTab: {
        title: "このタブを閉じてもかまいません",
      },
      verified: {
        title: "正常にサインインしました",
        subtitle: "まもなくリダイレクトされます",
      },
      verifiedSwitchTab: {
        subtitle: "続行するには元のタブに戻ってください",
        titleNewTab: "他のタブでサインイン済み",
        subtitleNewTab: "新しく開いたタブに戻って続行してください",
      },
      loading: {
        title: "サインイン中...",
        subtitle: "まもなくリダイレクトされます",
      },
      failed: {
        title: "この検証リンクは無効です",
        subtitle: "元のタブに戻って続行してください。",
      },
      expired: {
        title: "この検証リンクは期限切れです",
        subtitle: "元のタブに戻って続行してください。",
      },
    },
    phoneCode: { ...commonTexts.signIn.phoneCode },
    phoneCodeMfa: { ...commonTexts.signIn.phoneCode, subtitle: "" },
    totpMfa: {
      title: "二段階認証",
      subtitle: "",
      formTitle: "検証コード",
      formSubtitle: "認証アプリで生成された検証コードを入力してください",
    },
    backupCodeMfa: {
      title: "バックアップコードを入力",
      subtitle: "{{applicationName}}へのアクセス",
      formTitle: "",
      formSubtitle: "",
    },
    alternativeMethods: {
      title: "別の方法を使用",
      actionLink: "ヘルプを取得",
      blockButton__emailLink: "{{identifier}}にメールリンクを送信",
      blockButton__emailCode: "{{identifier}}にメールコードを送信",
      blockButton__phoneCode: "{{identifier}}にSMSコードを送信",
      blockButton__password: "パスワードでサインインする",
      blockButton__totp: "認証アプリを使用する",
      blockButton__backupCode: "バックアップコードを使用する",
      getHelp: {
        title: "ヘルプを取得",
        content:
          "アカウントにサインインできない場合は、メールでお問い合わせいただければ、できるだけ早くアクセスを回復するためにお手伝いいたします。",
        blockButton__emailSupport: "メールサポート",
      },
    },
    noAvailableMethods: {
      title: "サインインできません",
      subtitle: "エラーが発生しました",
      message: "サインインできません。利用可能な認証方法がありません。",
    },
  },
  userProfile: {
    mobileButton__menu: "メニュー",
    formButtonPrimary__continue: "続行",
    formButtonPrimary__finish: "完了",
    formButtonReset: "キャンセル",
    start: {
      headerTitle__account: "アカウント",
      headerTitle__security: "セキュリティ",
      profileSection: {
        title: "プロフィール",
      },
      usernameSection: {
        title: "ユーザー名",
        primaryButton__changeUsername: "ユーザー名の変更",
        primaryButton__setUsername: "ユーザー名の設定",
      },
      emailAddressesSection: {
        title: "メールアドレス",
        primaryButton: "メールアドレスの追加",
        detailsTitle__primary: "プライマリメールアドレス",
        detailsSubtitle__primary:
          "このメールアドレスはプライマリメールアドレスです",
        detailsAction__primary: "確認を完了する",
        detailsTitle__nonPrimary: "プライマリメールアドレスに設定",
        detailsSubtitle__nonPrimary:
          "このメールアドレスをプライマリメールアドレスに設定して、アカウントに関する通知を受け取ります。",
        detailsAction__nonPrimary: "プライマリに設定する",
        detailsTitle__unverified: "未確認メールアドレス",
        detailsSubtitle__unverified:
          "このメールアドレスは確認されていないため、機能が制限される場合があります",
        detailsAction__unverified: "確認を完了する",
        destructiveActionTitle: "削除",
        destructiveActionSubtitle:
          "このメールアドレスを削除し、アカウントから削除します",
        destructiveAction: "メールアドレスの削除",
      },
      phoneNumbersSection: {
        title: "電話番号",
        primaryButton: "電話番号の追加",
        detailsTitle__primary: "プライマリ電話番号",
        detailsSubtitle__primary: "この電話番号はプライマリ電話番号です",
        detailsAction__primary: "確認を完了する",
        detailsTitle__nonPrimary: "プライマリ電話番号に設定",
        detailsSubtitle__nonPrimary:
          "この電話番号をプライマリ電話番号に設定して、アカウントに関する通知を受け取ります。",
        detailsAction__nonPrimary: "プライマリに設定する",
        detailsTitle__unverified: "未確認電話番号",
        detailsSubtitle__unverified:
          "この電話番号は確認されていないため、機能が制限される場合があります",
        detailsAction__unverified: "確認を完了する",
        destructiveActionTitle: "削除",
        destructiveActionSubtitle:
          "この電話番号を削除し、アカウントから削除します",
        destructiveAction: "電話番号の削除",
      },
      connectedAccountsSection: {
        title: "連携アカウント",
        primaryButton: "アカウントを連携する",
        title__connectionFailed: "接続の再試行",
        title__reauthorize: "再認証が必要です",
        subtitle__reauthorize:
          "必要なスコープが更新されたため、機能が制限されている可能性があります。問題を回避するために、このアプリケーションを再認証してください",
        actionLabel__connectionFailed: "再試行",
        actionLabel__reauthorize: "今すぐ認証",
        destructiveActionTitle: "削除",
        destructiveActionSubtitle:
          "この連携アカウントをアカウントから削除します",
        destructiveActionAccordionSubtitle: "連携アカウントの削除",
      },
      passwordSection: {
        title: "パスワード",
        primaryButton__changePassword: "パスワードを変更する",
        primaryButton__setPassword: "パスワードを設定する",
      },
      mfaSection: {
        title: "二段階認証",
        primaryButton: "二段階認証を追加する",
        phoneCode: {
          destructiveActionTitle: "削除",
          destructiveActionSubtitle:
            "この電話番号を二段階認証の方法から削除します",
          destructiveActionLabel: "電話番号の削除",
          title__default: "デフォルトの要素",
          title__setDefault: "デフォルトの要素に設定",
          subtitle__default:
            "この要素は、サインイン時のデフォルトの二段階認証方法として使用されます。",
          subtitle__setDefault:
            "この要素をデフォルトの要素に設定して、サインイン時のデフォルトの二段階認証方法として使用します。",
          actionLabel__setDefault: "デフォルトに設定",
        },
        backupCodes: {
          headerTitle: "バックアップコード",
          title__regenerate: "バックアップコードの再生成",
          subtitle__regenerate:
            "安全な新しいバックアップコードを取得します。以前のバックアップコードは削除され、使用することはできません。",
          actionLabel__regenerate: "コードを再生成",
        },
        totp: {
          headerTitle: "認証アプリケーション",
          title: "デフォルトの要素",
          subtitle:
            "この要素は、サインイン時のデフォルトの二段階認証方法として使用されます。",
          destructiveActionTitle: "削除",
          destructiveActionSubtitle:
            "認証アプリケーションを二段階認証の方法から削除します",
          destructiveActionLabel: "認証アプリケーションの削除",
        },
      },
      activeDevicesSection: {
        title: "アクティブなデバイス",
        primaryButton: "アクティブなデバイス",
        detailsTitle: "現在のデバイス",
        detailsSubtitle: "現在使用しているデバイスです",
        destructiveActionTitle: "サインアウト",
        destructiveActionSubtitle:
          "このデバイスからアカウントをサインアウトします",
        destructiveAction: "デバイスからサインアウト",
      },
      web3WalletsSection: {
        title: "Web3ウォレット",
        primaryButton: "Web3ウォレット",
        destructiveActionTitle: "削除",
        destructiveActionSubtitle:
          "このWeb3ウォレットをアカウントから削除します",
        destructiveAction: "ウォレットの削除",
      },
    },
    profilePage: {
      title: "プロフィールの更新",
      imageFormTitle: "プロフィール画像",
      imageFormSubtitle: "画像のアップロード",
      imageFormDestructiveActionSubtitle: "画像の削除",
      fileDropAreaTitle: "ファイルをここにドラッグするか、...",
      fileDropAreaAction: "ファイルの選択",
      fileDropAreaHint:
        "10MB未満のJPG、PNG、GIF、またはWEBP画像をアップロードしてください",
      successMessage: "プロフィールが更新されました。",
    },
    usernamePage: {
      title: "ユーザー名の更新",
      successMessage: "ユーザー名が更新されました。",
    },
    emailAddressPage: {
      title: "メールアドレスの追加",
      emailCode: {
        formHint:
          "このメールアドレスには検証コードが含まれたメールが送信されます。",
        formTitle: "検証コード",
        formSubtitle:
          "{{identifier}}に送信された検証コードを入力してください。",
        resendButton: "コードを再送信",
        successMessage:
          "メールアドレス{{identifier}}がアカウントに追加されました。",
      },
      emailLink: {
        formHint:
          "このメールアドレスには検証リンクが含まれたメールが送信されます。",
        formTitle: "検証リンク",
        formSubtitle:
          "{{identifier}}に送信されたメールの検証リンクをクリックしてください。",
        resendButton: "リンクを再送信",
        successMessage:
          "メールアドレス{{identifier}}がアカウントに追加されました。",
      },
      removeResource: {
        title: "メールアドレスの削除",
        messageLine1: "{{identifier}}はこのアカウントから削除されます。",
        messageLine2:
          "このメールアドレスを使用してのサインインはできなくなります。",
        successMessage: "{{emailAddress}}がアカウントから削除されました。",
      },
    },
    phoneNumberPage: {
      title: "電話番号の追加",
      successMessage: "{{identifier}}がアカウントに追加されました。",
      infoText:
        "この電話番号には検証リンクが含まれたテキストメッセージが送信されます。",
      infoText__secondary:
        "メッセージおよびデータ料金が発生する場合があります。",
      removeResource: {
        title: "電話番号の削除",
        messageLine1: "{{identifier}}はこのアカウントから削除されます。",
        messageLine2: "この電話番号を使用してのサインインはできなくなります。",
        successMessage: "{{phoneNumber}}がアカウントから削除されました。",
      },
    },
    connectedAccountPage: {
      title: "連携アカウントの追加",
      formHint: "アカウントを連携するプロバイダを選択してください。",
      formHint__noAccounts: "利用可能な外部アカウントプロバイダはありません。",
      socialButtonsBlockButton: "{{provider|titleize}}アカウントを連携する",
      successMessage: "プロバイダがアカウントに追加されました",
      removeResource: {
        title: "連携アカウントの削除",
        messageLine1: "{{identifier}}はこのアカウントから削除されます。",
        messageLine2:
          "この連携アカウントを使用することはできなくなり、関連する機能も使用できなくなります。",
        successMessage: "{{connectedAccount}}がアカウントから削除されました。",
      },
    },
    web3WalletPage: {
      title: "Web3ウォレットの追加",
      subtitle__availableWallets:
        "アカウントに接続するWeb3ウォレットを選択してください。",
      subtitle__unavailableWallets: "利用可能なWeb3ウォレットはありません。",
      successMessage: "ウォレットがアカウントに追加されました。",
      removeResource: {
        title: "Web3ウォレットの削除",
        messageLine1: "{{identifier}}はこのアカウントから削除されます。",
        messageLine2:
          "このWeb3ウォレットを使用してのサインインはできなくなります。",
        successMessage: "{{web3Wallet}}がアカウントから削除されました。",
      },
    },
    passwordPage: {
      title: "パスワードの設定",
      changePasswordTitle: "パスワードの変更",
      successMessage: "パスワードが設定されました。",
      changePasswordSuccessMessage: "パスワードが更新されました。",
      sessionsSignedOutSuccessMessage:
        "他のすべてのデバイスからサインアウトされました。",
    },
    mfaPage: {
      title: "二段階認証の追加",
      formHint: "追加する方法を選択してください。",
    },
    mfaTOTPPage: {
      title: "認証アプリの追加",
      verifyTitle: "検証コード",
      verifySubtitle: "認証アプリで生成された検証コードを入力してください。",
      successMessage:
        "二段階認証が有効になりました。サインイン時には、この認証アプリからの検証コードを追加のステップとして入力する必要があります。",
      authenticatorApp: {
        infoText__ableToScan:
          "認証アプリで新しいサインイン方法を設定し、以下のQRコードをスキャンしてアカウントとリンクさせます。",
        infoText__unableToScan:
          "認証アプリで新しいサインイン方法を設定し、以下のキーを入力してください。",
        inputLabel__unableToScan1:
          "タイムベースまたはワンタイムパスワードが有効になっていることを確認し、アカウントのリンクを完了してください。",
        inputLabel__unableToScan2:
          "また、認証アプリがTOTP URIをサポートしている場合は、完全なURIをコピーすることもできます。",
        buttonAbleToScan__nonPrimary: "代わりにQRコードをスキャンする",
        buttonUnableToScan__nonPrimary: "QRコードをスキャンできませんか？",
      },
      removeResource: {
        title: "二段階認証の削除",
        messageLine1:
          "この認証アプリからの検証コードは、サインイン時には不要になります。",
        messageLine2:
          "アカウントのセキュリティが低下する可能性があります。本当に削除しますか？",
        successMessage: "認証アプリを使用した二段階認証が削除されました。",
      },
    },
    mfaPhoneCodePage: {
      title: "SMSコード認証の追加",
      primaryButton__addPhoneNumber: "電話番号を追加",
      subtitle__availablePhoneNumbers:
        "SMSコード二段階認証のために登録する電話番号を選択してください。",
      subtitle__unavailablePhoneNumbers:
        "SMSコード二段階認証のために利用可能な電話番号はありません。",
      successMessage:
        "この電話番号でSMSコード二段階認証が有効になりました。サインイン時には、この電話番号に送信された認証コードを追加のステップとして入力する必要があります。",
      removeResource: {
        title: "二段階認証の削除",
        messageLine1:
          "{{identifier}}はサインイン時に認証コードを受け取らなくなります。",
        messageLine2:
          "アカウントのセキュリティが低下する可能性があります。本当に削除しますか？",
        successMessage:
          "{{mfaPhoneCode}}のSMSコード二段階認証が削除されました。",
      },
    },
    backupCodePage: {
      title: "バックアップコードの追加",
      title__codelist: "バックアップコード",
      subtitle__codelist:
        "バックアップコードを安全に保管し、秘密にしてください。",
      infoText1: "このアカウントではバックアップコードが有効になります。",
      infoText2:
        "バックアップコードは秘密に保管し、安全に保存してください。疑わしい場合はバックアップコードを再生成することができます。",
      successSubtitle:
        "認証デバイスにアクセスできない場合、これらのいずれかを使用してアカウントにサインインできます。",
      successMessage:
        "バックアップコードが有効になりました。認証デバイスにアクセスできない場合、これらのいずれかを使用してアカウントにサインインできます。各コードは一度しか使用できません。",
      actionLabel__copy: "すべてコピー",
      actionLabel__copied: "コピー済み！",
      actionLabel__download: ".txtでダウンロード",
      actionLabel__print: "印刷",
    },
  },
  userButton: {
    action__manageAccount: "アカウントの管理",
    action__signOut: "サインアウト",
    action__signOutAll: "全てのアカウントからサインアウト",
    action__addAccount: "アカウントの追加",
  },
  organizationSwitcher: {
    personalWorkspace: "個人ワークスペース",
    notSelected: "組織が選択されていません",
    action__createOrganization: "組織の作成",
    action__manageOrganization: "組織の管理",
  },
  impersonationFab: {
    title: "{{identifier}}としてサインイン中",
    action__signOut: "サインアウト",
  },
  organizationProfile: {
    start: {
      headerTitle__members: "メンバー",
      headerTitle__settings: "設定",
    },
    profilePage: {
      title: "組織プロフィール",
      subtitle: "組織プロフィールを管理する",
      successMessage: "組織が更新されました。",
      dangerSection: {
        title: "注意",
        leaveOrganization: {
          title: "組織を脱退",
          messageLine1:
            "この組織から脱退してもよろしいですか？この組織とそのアプリケーションへのアクセスが失われます。",
          messageLine2: "この操作は永久的で取り消すことはできません。",
          successMessage: "組織から脱退しました。",
        },
      },
    },
    invitePage: {
      title: "メンバーを招待",
      subtitle: "この組織に新しいメンバーを招待する",
      successMessage: "招待状が正常に送信されました",
      detailsTitle__inviteFailed:
        "招待状を送信できませんでした。以下を修正してもう一度試してください:",
      formButtonPrimary__continue: "招待状を送信する",
    },
    membersPage: {
      detailsTitle__emptyRow: "表示するメンバーはありません",
      action__invite: "招待",
      start: {},
      activeMembersTab: {
        tableHeader__user: "ユーザー",
        tableHeader__joined: "参加日時",
        tableHeader__role: "役割",
        tableHeader__actions: "",
        menuAction__remove: "メンバーの削除",
      },
      invitedMembersTab: {
        tableHeader__invited: "招待済み",
        menuAction__revoke: "招待を取り消す",
      },
    },
  },
  createOrganization: {
    title: "組織の作成",
    formButtonSubmit: "組織を作成する",
    invitePage: {
      formButtonReset: "スキップ",
    },
  },
  unstable__errors: {
    form_identifier_not_found: "",
    form_password_pwned:
      "このパスワードは侵害の一部として見つかったため使用できません。別のパスワードを試してください。",
    form_username_invalid_length: "ユーザーネームは4~64文字にしてください",
    form_username_invalid_character:
      "ユーザーネームは半角のアルファベット、数字、アンダースコア(_)、ダッシュ(-)を含むことができます",
    form_param_format_invalid: "",
    form_password_length_too_short: "",
    form_param_nil: "",
    form_code_incorrect: "",
    form_password_incorrect: "",
    not_allowed_access: "",
    form_identifier_exists: "",
    form_password_validation_failed: "パスワードが間違っています",
    form_password_not_strong_enough: "パスワードの強度が不十分です。",
    form_password_size_in_bytes_exceeded:
      "パスワードのバイト数が上限を超えています。短くするか、一部の特殊文字を削除してください。",
    passwordComplexity: {
      sentencePrefix: "パスワードは次の条件を満たす必要があります：",
      minimumLength: "{{length}}文字以上",
      maximumLength: "{{length}}文字未満",
      requireNumbers: "数字を含む",
      requireLowercase: "小文字を含む",
      requireUppercase: "大文字を含む",
      requireSpecialCharacter: "特殊文字を含む",
    },
    zxcvbn: {
      notEnough: "パスワードの強度が十分ではありません。",
      couldBeStronger:
        "パスワードは有効ですが、もう少し強化できます。文字を追加してみてください。",
      goodPassword: "素晴らしい仕事です。これは優れたパスワードです。",
      warnings: {
        straightRow: "キーボード上の連続した行は推測しやすいです。",
        keyPattern: "短いキーボードパターンは推測しやすいです。",
        simpleRepeat: "「aaa」といった繰り返し文字は推測しやすいです。",
        extendedRepeat:
          "「abcabcabc」といった繰り返しパターンは推測しやすいです。",
        sequences: "「abc」といった一般的な文字の並びは推測しやすいです。",
        recentYears: "最近の年号は推測しやすいです。",
        dates: "日付は推測しやすいです。",
        topTen: "これはよく使われるパスワードです。",
        topHundred: "これは頻繁に使われるパスワードです。",
        common: "これは一般的に使われるパスワードです。",
        similarToCommon: "これは一般的に使われるパスワードに類似しています。",
        wordByItself: "単語単体では推測しやすいです。",
        namesByThemselves: "単体の名前や姓は推測しやすいです。",
        commonNames: "一般的な名前や姓は推測しやすいです。",
        userInputs:
          "個人情報やページに関連するデータは含まれていないはずです。",
        pwned:
          "このパスワードはインターネット上のデータ侵害によって公開されています。",
      },
      suggestions: {
        l33t: "予測可能な文字の代替（例：'@' で 'a' を置き換える）を避けてください。",
        reverseWords: "一般的な単語の逆さ読みは避けてください。",
        allUppercase:
          "全ての文字を大文字にするのではなく、一部の文字を大文字にしてください。",
        capitalization: "最初の文字以外も大文字にしてください。",
        dates: "自分に関連する日付や年号は避けてください。",
        recentYears: "最近の年号は避けてください。",
        associatedYears: "自分に関連する年号は避けてください。",
        sequences: "一般的な文字の並びを避けてください。",
        repeated: "繰り返される単語や文字を避けてください。",
        longerKeyboardPattern:
          "長いキーボードパターンを使用し、タイピングの方向を複数回変えてください。",
        anotherWord: "より一般的でない単語を追加してください。",
        useWords:
          "複数の単語を使用してくださいが、一般的なフレーズは避けてください。",
        noNeed:
          "シンボル、数字、大文字の使用なしでも強力なパスワードを作成できます。",
        pwned:
          "他の場所でこのパスワードを使用している場合は、変更する必要があります。",
      },
    },
  },
  dates: {
    previous6Days:
      "{{ date | weekday('ja-JP','long') }}の{{ date | timeString('ja-JP') }}に",
    lastDay: "昨日の{{ date | timeString('ja-JP') }}に",
    sameDay: "今日の{{ date | timeString('ja-JP') }}に",
    nextDay: "明日の{{ date | timeString('ja-JP') }}に",
    next6Days:
      "{{ date | weekday('ja-JP','long') }}の{{ date | timeString('ja-JP') }}に",
    numeric: "{{ date | numeric('ja-JP') }}に",
  },
} as const;
