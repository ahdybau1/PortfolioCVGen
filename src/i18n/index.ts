import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      common: {
        welcome: 'Welcome to PI-Builder',
        login: 'Login',
        signup: 'Sign Up',
        logout: 'Logout',
        dashboard: 'Dashboard',
        profile: 'Profile',
        settings: 'Settings',
        save: 'Save',
        cancel: 'Cancel',
        delete: 'Delete',
        edit: 'Edit',
        create: 'Create',
        export: 'Export',
        preview: 'Preview',
        loading: 'Loading...',
        language: 'Language',
        theme: 'Theme',
        back: 'Back',
        next: 'Next',
        finish: 'Finish',
        download: 'Download',
        share: 'Share',
        duplicate: 'Duplicate',
        template: 'Template',
        color: 'Color',
        font: 'Font',
        upload: 'Upload',
        remove: 'Remove',
        add: 'Add',
        close: 'Close',
        open: 'Open',
        search: 'Search',
        filter: 'Filter',
        sort: 'Sort',
        view: 'View',
        publish: 'Publish',
        unpublish: 'Unpublish',
        draft: 'Draft',
        published: 'Published'
      },
      nav: {
        home: 'Home',
        cv: 'CV Builder',
        portfolio: 'Portfolio',
        templates: 'Templates',
        pricing: 'Pricing',
        about: 'About',
        contact: 'Contact',
        help: 'Help',
        documentation: 'Documentation'
      },
      home: {
        hero: {
          title: 'Create Professional CVs & Portfolios',
          subtitle: 'Build stunning resumes and dynamic portfolios with our AI-powered platform. Stand out from the crowd with professional designs.',
          cta: 'Get Started Free',
          watchDemo: 'Watch Demo',
          trustedBy: 'Trusted by professionals worldwide'
        },
        features: {
          title: 'Everything you need to showcase your talent',
          subtitle: 'Professional tools to create, customize, and share your work',
          cv: {
            title: 'Smart CV Builder',
            description: 'Choose from 15+ professional templates and customize every detail with our intuitive editor'
          },
          portfolio: {
            title: 'Dynamic Portfolios',
            description: 'Create animated, responsive portfolios with your custom domain and showcase your work beautifully'
          },
          multilingual: {
            title: 'Multilingual Support',
            description: 'Available in French, Italian, and English with automatic content translation'
          },
          ai: {
            title: 'AI-Powered',
            description: 'Smart suggestions and auto-fill features to speed up your creation process'
          },
          export: {
            title: 'Export Anywhere',
            description: 'Download as PDF, share with a link, or embed in your website'
          },
          sharing: {
            title: 'Easy Sharing',
            description: 'Get your custom domain and share your work with the world'
          }
        },
        stats: {
          templates: 'CV Templates',
          portfolios: 'Portfolio Themes',
          languages: 'Languages',
          users: 'Happy Users'
        },
        testimonials: {
          title: 'What our users say',
          subtitle: 'Join thousands of professionals who trust PI-Builder'
        },
        cta: {
          title: 'Ready to build your professional presence?',
          subtitle: 'Join thousands of professionals who use PI-Builder to showcase their skills',
          button: 'Start Building Now'
        }
      },
      auth: {
        loginTitle: 'Welcome back',
        loginSubtitle: 'Sign in to your account to continue',
        signupTitle: 'Create your account',
        signupSubtitle: 'Join thousands of professionals using PI-Builder',
        email: 'Email address',
        password: 'Password',
        confirmPassword: 'Confirm Password',
        fullName: 'Full Name',
        dontHaveAccount: "Don't have an account?",
        alreadyHaveAccount: 'Already have an account?',
        forgotPassword: 'Forgot your password?',
        resetPassword: 'Reset Password',
        rememberMe: 'Remember me',
        termsAccept: 'I agree to the Terms of Service and Privacy Policy',
        emailPlaceholder: 'Enter your email',
        passwordPlaceholder: 'Enter your password',
        namePlaceholder: 'Enter your full name'
      },
      dashboard: {
        title: 'Dashboard',
        welcome: 'Welcome back',
        subtitle: 'Manage your CVs and portfolios from here',
        stats: {
          totalCvs: 'Total CVs',
          portfolios: 'Portfolios',
          views: 'Total Views',
          downloads: 'Downloads'
        },
        quickActions: {
          title: 'Quick Actions',
          createCv: {
            title: 'Create New CV',
            description: 'Choose from 15+ professional templates'
          },
          createPortfolio: {
            title: 'Create Portfolio',
            description: 'Build a stunning personal website'
          }
        },
        recent: {
          cvs: 'Recent CVs',
          portfolios: 'Recent Portfolios',
          viewAll: 'View All',
          noItems: 'No items yet',
          createFirst: 'Create your first'
        },
        actions: {
          edit: 'Edit',
          preview: 'Preview',
          download: 'Download',
          share: 'Share',
          duplicate: 'Duplicate',
          delete: 'Delete',
          publish: 'Publish',
          unpublish: 'Unpublish'
        }
      },
      cv: {
        title: 'CV Builder',
        subtitle: 'Create your professional resume',
        steps: {
          template: 'Choose Template',
          content: 'Add Content',
          customize: 'Customize',
          export: 'Export'
        },
        sections: {
          personal: 'Personal Information',
          experience: 'Work Experience',
          education: 'Education',
          skills: 'Skills',
          languages: 'Languages',
          hobbies: 'Hobbies & Interests',
          projects: 'Projects',
          certifications: 'Certifications',
          references: 'References'
        },
        fields: {
          firstName: 'First Name',
          lastName: 'Last Name',
          email: 'Email',
          phone: 'Phone',
          address: 'Address',
          city: 'City',
          country: 'Country',
          website: 'Website',
          linkedin: 'LinkedIn',
          github: 'GitHub',
          summary: 'Professional Summary',
          jobTitle: 'Job Title',
          company: 'Company',
          startDate: 'Start Date',
          endDate: 'End Date',
          current: 'Current Position',
          description: 'Description',
          degree: 'Degree',
          school: 'School/University',
          skillName: 'Skill Name',
          skillLevel: 'Skill Level',
          languageName: 'Language',
          languageLevel: 'Proficiency Level',
          hobbyName: 'Hobby/Interest',
          projectName: 'Project Name',
          projectUrl: 'Project URL',
          certificationName: 'Certification',
          issuer: 'Issuing Organization',
          issueDate: 'Issue Date',
          referenceName: 'Reference Name',
          referenceTitle: 'Title',
          referenceCompany: 'Company',
          referenceEmail: 'Email',
          referencePhone: 'Phone'
        },
        templates: {
          modern: 'Modern',
          classic: 'Classic',
          creative: 'Creative',
          minimal: 'Minimal',
          professional: 'Professional',
          elegant: 'Elegant',
          bold: 'Bold',
          simple: 'Simple'
        },
        customization: {
          colors: 'Colors',
          fonts: 'Fonts',
          layout: 'Layout',
          spacing: 'Spacing',
          photo: 'Profile Photo'
        }
      },
      portfolio: {
        title: 'Portfolio Builder',
        subtitle: 'Create your professional portfolio',
        steps: {
          template: 'Choose Template',
          content: 'Add Content',
          customize: 'Customize',
          publish: 'Publish'
        },
        sections: {
          hero: 'Hero Section',
          about: 'About Me',
          services: 'Services',
          projects: 'Projects',
          testimonials: 'Testimonials',
          contact: 'Contact',
          blog: 'Blog',
          gallery: 'Gallery'
        },
        templates: {
          creative: 'Creative',
          business: 'Business',
          minimal: 'Minimal',
          photography: 'Photography',
          developer: 'Developer',
          designer: 'Designer',
          writer: 'Writer',
          consultant: 'Consultant'
        },
        fields: {
          heroTitle: 'Hero Title',
          heroSubtitle: 'Hero Subtitle',
          aboutTitle: 'About Title',
          aboutDescription: 'About Description',
          serviceName: 'Service Name',
          serviceDescription: 'Service Description',
          projectName: 'Project Name',
          projectDescription: 'Project Description',
          projectUrl: 'Project URL',
          testimonialText: 'Testimonial Text',
          testimonialAuthor: 'Author Name',
          testimonialRole: 'Author Role',
          contactEmail: 'Contact Email',
          contactPhone: 'Contact Phone',
          contactAddress: 'Contact Address'
        }
      },
      templates: {
        title: 'Templates',
        subtitle: 'Choose from our collection of professional templates',
        categories: {
          all: 'All Templates',
          cv: 'CV Templates',
          portfolio: 'Portfolio Templates',
          popular: 'Popular',
          new: 'New',
          free: 'Free',
          premium: 'Premium'
        },
        actions: {
          preview: 'Preview',
          use: 'Use Template',
          favorite: 'Add to Favorites'
        }
      },
      pricing: {
        title: 'Simple, transparent pricing',
        subtitle: 'Choose the plan that works best for you',
        monthly: 'Monthly',
        yearly: 'Yearly',
        save: 'Save 20%',
        plans: {
          free: {
            name: 'Free',
            price: '0',
            description: 'Perfect for getting started',
            features: [
              '3 CV templates',
              '2 portfolio templates',
              'Basic customization',
              'PDF export',
              'Community support'
            ]
          },
          pro: {
            name: 'Pro',
            price: '9',
            description: 'Best for professionals',
            features: [
              'All CV templates',
              'All portfolio templates',
              'Advanced customization',
              'Custom domain',
              'Analytics',
              'Priority support',
              'AI suggestions'
            ]
          },
          team: {
            name: 'Team',
            price: '29',
            description: 'Perfect for teams',
            features: [
              'Everything in Pro',
              'Team collaboration',
              'Brand management',
              'Advanced analytics',
              'API access',
              'Dedicated support'
            ]
          }
        },
        cta: 'Get Started',
        popular: 'Most Popular'
      },
      settings: {
        title: 'Settings',
        subtitle: 'Manage your account preferences',
        tabs: {
          profile: 'Profile',
          account: 'Account',
          preferences: 'Preferences',
          billing: 'Billing',
          security: 'Security'
        },
        profile: {
          title: 'Profile Information',
          subtitle: 'Update your personal information',
          avatar: 'Profile Picture',
          name: 'Full Name',
          email: 'Email Address',
          bio: 'Bio',
          website: 'Website',
          location: 'Location',
          timezone: 'Timezone'
        },
        preferences: {
          title: 'Preferences',
          subtitle: 'Customize your experience',
          language: 'Language',
          theme: 'Theme',
          notifications: 'Notifications',
          emailNotifications: 'Email Notifications',
          pushNotifications: 'Push Notifications'
        }
      },
      footer: {
        description: 'Create professional CVs and portfolios with ease',
        links: {
          product: 'Product',
          company: 'Company',
          support: 'Support',
          legal: 'Legal'
        },
        product: {
          features: 'Features',
          templates: 'Templates',
          pricing: 'Pricing',
          api: 'API'
        },
        company: {
          about: 'About Us',
          careers: 'Careers',
          blog: 'Blog',
          press: 'Press'
        },
        support: {
          help: 'Help Center',
          contact: 'Contact Us',
          status: 'Status',
          community: 'Community'
        },
        legal: {
          privacy: 'Privacy Policy',
          terms: 'Terms of Service',
          cookies: 'Cookie Policy'
        },
        copyright: '© 2024 Progress Intelligent. All rights reserved.'
      }
    }
  },
  fr: {
    translation: {
      common: {
        welcome: 'Bienvenue sur PI-Builder',
        login: 'Connexion',
        signup: 'Inscription',
        logout: 'Déconnexion',
        dashboard: 'Tableau de bord',
        profile: 'Profil',
        settings: 'Paramètres',
        save: 'Enregistrer',
        cancel: 'Annuler',
        delete: 'Supprimer',
        edit: 'Modifier',
        create: 'Créer',
        export: 'Exporter',
        preview: 'Aperçu',
        loading: 'Chargement...',
        language: 'Langue',
        theme: 'Thème',
        back: 'Retour',
        next: 'Suivant',
        finish: 'Terminer',
        download: 'Télécharger',
        share: 'Partager',
        duplicate: 'Dupliquer',
        template: 'Modèle',
        color: 'Couleur',
        font: 'Police',
        upload: 'Téléverser',
        remove: 'Supprimer',
        add: 'Ajouter',
        close: 'Fermer',
        open: 'Ouvrir',
        search: 'Rechercher',
        filter: 'Filtrer',
        sort: 'Trier',
        view: 'Voir',
        publish: 'Publier',
        unpublish: 'Dépublier',
        draft: 'Brouillon',
        published: 'Publié'
      },
      nav: {
        home: 'Accueil',
        cv: 'Créateur CV',
        portfolio: 'Portfolio',
        templates: 'Modèles',
        pricing: 'Tarifs',
        about: 'À propos',
        contact: 'Contact',
        help: 'Aide',
        documentation: 'Documentation'
      },
      home: {
        hero: {
          title: 'Créez des CV et Portfolios Professionnels',
          subtitle: 'Construisez des CV époustouflants et des portfolios dynamiques avec notre plateforme IA. Démarquez-vous avec des designs professionnels.',
          cta: 'Commencer Gratuitement',
          watchDemo: 'Voir la Démo',
          trustedBy: 'Utilisé par des professionnels du monde entier'
        },
        features: {
          title: 'Tout ce dont vous avez besoin pour présenter votre talent',
          subtitle: 'Outils professionnels pour créer, personnaliser et partager votre travail',
          cv: {
            title: 'Créateur CV Intelligent',
            description: 'Choisissez parmi plus de 15 modèles professionnels et personnalisez chaque détail avec notre éditeur intuitif'
          },
          portfolio: {
            title: 'Portfolios Dynamiques',
            description: 'Créez des portfolios animés et responsives avec votre domaine personnalisé et présentez votre travail magnifiquement'
          },
          multilingual: {
            title: 'Support Multilingue',
            description: 'Disponible en français, italien et anglais avec traduction automatique du contenu'
          },
          ai: {
            title: 'Alimenté par IA',
            description: 'Suggestions intelligentes et fonctionnalités de remplissage automatique pour accélérer votre processus de création'
          },
          export: {
            title: 'Exportez Partout',
            description: 'Téléchargez en PDF, partagez avec un lien ou intégrez dans votre site web'
          },
          sharing: {
            title: 'Partage Facile',
            description: 'Obtenez votre domaine personnalisé et partagez votre travail avec le monde'
          }
        },
        stats: {
          templates: 'Modèles CV',
          portfolios: 'Thèmes Portfolio',
          languages: 'Langues',
          users: 'Utilisateurs Satisfaits'
        },
        testimonials: {
          title: 'Ce que disent nos utilisateurs',
          subtitle: 'Rejoignez des milliers de professionnels qui font confiance à PI-Builder'
        },
        cta: {
          title: 'Prêt à construire votre présence professionnelle ?',
          subtitle: 'Rejoignez des milliers de professionnels qui utilisent PI-Builder pour présenter leurs compétences',
          button: 'Commencer Maintenant'
        }
      },
      auth: {
        loginTitle: 'Bon retour',
        loginSubtitle: 'Connectez-vous à votre compte pour continuer',
        signupTitle: 'Créez votre compte',
        signupSubtitle: 'Rejoignez des milliers de professionnels utilisant PI-Builder',
        email: 'Adresse email',
        password: 'Mot de passe',
        confirmPassword: 'Confirmer le mot de passe',
        fullName: 'Nom complet',
        dontHaveAccount: "Vous n'avez pas de compte ?",
        alreadyHaveAccount: 'Vous avez déjà un compte ?',
        forgotPassword: 'Mot de passe oublié ?',
        resetPassword: 'Réinitialiser le mot de passe',
        rememberMe: 'Se souvenir de moi',
        termsAccept: "J'accepte les Conditions d'utilisation et la Politique de confidentialité",
        emailPlaceholder: 'Entrez votre email',
        passwordPlaceholder: 'Entrez votre mot de passe',
        namePlaceholder: 'Entrez votre nom complet'
      },
      dashboard: {
        title: 'Tableau de bord',
        welcome: 'Bon retour',
        subtitle: 'Gérez vos CV et portfolios depuis ici',
        stats: {
          totalCvs: 'Total CV',
          portfolios: 'Portfolios',
          views: 'Vues Totales',
          downloads: 'Téléchargements'
        },
        quickActions: {
          title: 'Actions Rapides',
          createCv: {
            title: 'Créer un Nouveau CV',
            description: 'Choisissez parmi plus de 15 modèles professionnels'
          },
          createPortfolio: {
            title: 'Créer un Portfolio',
            description: 'Construisez un site web personnel époustouflant'
          }
        },
        recent: {
          cvs: 'CV Récents',
          portfolios: 'Portfolios Récents',
          viewAll: 'Voir Tout',
          noItems: 'Aucun élément encore',
          createFirst: 'Créez votre premier'
        },
        actions: {
          edit: 'Modifier',
          preview: 'Aperçu',
          download: 'Télécharger',
          share: 'Partager',
          duplicate: 'Dupliquer',
          delete: 'Supprimer',
          publish: 'Publier',
          unpublish: 'Dépublier'
        }
      },
      cv: {
        title: 'Créateur de CV',
        subtitle: 'Créez votre CV professionnel',
        steps: {
          template: 'Choisir un Modèle',
          content: 'Ajouter du Contenu',
          customize: 'Personnaliser',
          export: 'Exporter'
        },
        sections: {
          personal: 'Informations personnelles',
          experience: 'Expérience professionnelle',
          education: 'Formation',
          skills: 'Compétences',
          languages: 'Langues',
          hobbies: 'Loisirs et Intérêts',
          projects: 'Projets',
          certifications: 'Certifications',
          references: 'Références'
        },
        fields: {
          firstName: 'Prénom',
          lastName: 'Nom',
          email: 'Email',
          phone: 'Téléphone',
          address: 'Adresse',
          city: 'Ville',
          country: 'Pays',
          website: 'Site web',
          linkedin: 'LinkedIn',
          github: 'GitHub',
          summary: 'Résumé professionnel',
          jobTitle: 'Titre du poste',
          company: 'Entreprise',
          startDate: 'Date de début',
          endDate: 'Date de fin',
          current: 'Poste actuel',
          description: 'Description',
          degree: 'Diplôme',
          school: 'École/Université',
          skillName: 'Nom de la compétence',
          skillLevel: 'Niveau de compétence',
          languageName: 'Langue',
          languageLevel: 'Niveau de maîtrise',
          hobbyName: 'Loisir/Intérêt',
          projectName: 'Nom du projet',
          projectUrl: 'URL du projet',
          certificationName: 'Certification',
          issuer: 'Organisation émettrice',
          issueDate: "Date d'émission",
          referenceName: 'Nom de la référence',
          referenceTitle: 'Titre',
          referenceCompany: 'Entreprise',
          referenceEmail: 'Email',
          referencePhone: 'Téléphone'
        },
        templates: {
          modern: 'Moderne',
          classic: 'Classique',
          creative: 'Créatif',
          minimal: 'Minimal',
          professional: 'Professionnel',
          elegant: 'Élégant',
          bold: 'Audacieux',
          simple: 'Simple'
        },
        customization: {
          colors: 'Couleurs',
          fonts: 'Polices',
          layout: 'Mise en page',
          spacing: 'Espacement',
          photo: 'Photo de profil'
        }
      },
      portfolio: {
        title: 'Créateur de Portfolio',
        subtitle: 'Créez votre portfolio professionnel',
        steps: {
          template: 'Choisir un Modèle',
          content: 'Ajouter du Contenu',
          customize: 'Personnaliser',
          publish: 'Publier'
        },
        sections: {
          hero: 'Section Héros',
          about: 'À propos de moi',
          services: 'Services',
          projects: 'Projets',
          testimonials: 'Témoignages',
          contact: 'Contact',
          blog: 'Blog',
          gallery: 'Galerie'
        },
        templates: {
          creative: 'Créatif',
          business: 'Business',
          minimal: 'Minimal',
          photography: 'Photographie',
          developer: 'Développeur',
          designer: 'Designer',
          writer: 'Écrivain',
          consultant: 'Consultant'
        },
        fields: {
          heroTitle: 'Titre Héros',
          heroSubtitle: 'Sous-titre Héros',
          aboutTitle: 'Titre À propos',
          aboutDescription: 'Description À propos',
          serviceName: 'Nom du service',
          serviceDescription: 'Description du service',
          projectName: 'Nom du projet',
          projectDescription: 'Description du projet',
          projectUrl: 'URL du projet',
          testimonialText: 'Texte du témoignage',
          testimonialAuthor: "Nom de l'auteur",
          testimonialRole: "Rôle de l'auteur",
          contactEmail: 'Email de contact',
          contactPhone: 'Téléphone de contact',
          contactAddress: 'Adresse de contact'
        }
      },
      templates: {
        title: 'Modèles',
        subtitle: 'Choisissez parmi notre collection de modèles professionnels',
        categories: {
          all: 'Tous les Modèles',
          cv: 'Modèles CV',
          portfolio: 'Modèles Portfolio',
          popular: 'Populaires',
          new: 'Nouveaux',
          free: 'Gratuits',
          premium: 'Premium'
        },
        actions: {
          preview: 'Aperçu',
          use: 'Utiliser le Modèle',
          favorite: 'Ajouter aux Favoris'
        }
      },
      pricing: {
        title: 'Tarification simple et transparente',
        subtitle: 'Choisissez le plan qui vous convient le mieux',
        monthly: 'Mensuel',
        yearly: 'Annuel',
        save: 'Économisez 20%',
        plans: {
          free: {
            name: 'Gratuit',
            price: '0',
            description: 'Parfait pour commencer',
            features: [
              '3 modèles CV',
              '2 modèles portfolio',
              'Personnalisation de base',
              'Export PDF',
              'Support communautaire'
            ]
          },
          pro: {
            name: 'Pro',
            price: '9',
            description: 'Idéal pour les professionnels',
            features: [
              'Tous les modèles CV',
              'Tous les modèles portfolio',
              'Personnalisation avancée',
              'Domaine personnalisé',
              'Analytiques',
              'Support prioritaire',
              'Suggestions IA'
            ]
          },
          team: {
            name: 'Équipe',
            price: '29',
            description: 'Parfait pour les équipes',
            features: [
              'Tout dans Pro',
              'Collaboration équipe',
              'Gestion de marque',
              'Analytiques avancées',
              'Accès API',
              'Support dédié'
            ]
          }
        },
        cta: 'Commencer',
        popular: 'Le Plus Populaire'
      },
      settings: {
        title: 'Paramètres',
        subtitle: 'Gérez vos préférences de compte',
        tabs: {
          profile: 'Profil',
          account: 'Compte',
          preferences: 'Préférences',
          billing: 'Facturation',
          security: 'Sécurité'
        },
        profile: {
          title: 'Informations du profil',
          subtitle: 'Mettez à jour vos informations personnelles',
          avatar: 'Photo de profil',
          name: 'Nom complet',
          email: 'Adresse email',
          bio: 'Bio',
          website: 'Site web',
          location: 'Localisation',
          timezone: 'Fuseau horaire'
        },
        preferences: {
          title: 'Préférences',
          subtitle: 'Personnalisez votre expérience',
          language: 'Langue',
          theme: 'Thème',
          notifications: 'Notifications',
          emailNotifications: 'Notifications email',
          pushNotifications: 'Notifications push'
        }
      },
      footer: {
        description: 'Créez des CV et portfolios professionnels en toute simplicité',
        links: {
          product: 'Produit',
          company: 'Entreprise',
          support: 'Support',
          legal: 'Légal'
        },
        product: {
          features: 'Fonctionnalités',
          templates: 'Modèles',
          pricing: 'Tarifs',
          api: 'API'
        },
        company: {
          about: 'À propos',
          careers: 'Carrières',
          blog: 'Blog',
          press: 'Presse'
        },
        support: {
          help: "Centre d'aide",
          contact: 'Nous contacter',
          status: 'Statut',
          community: 'Communauté'
        },
        legal: {
          privacy: 'Politique de confidentialité',
          terms: "Conditions d'utilisation",
          cookies: 'Politique des cookies'
        },
        copyright: '© 2024 Progress Intelligent. Tous droits réservés.'
      }
    }
  },
  it: {
    translation: {
      common: {
        welcome: 'Benvenuto su PI-Builder',
        login: 'Accedi',
        signup: 'Registrati',
        logout: 'Disconnetti',
        dashboard: 'Dashboard',
        profile: 'Profilo',
        settings: 'Impostazioni',
        save: 'Salva',
        cancel: 'Annulla',
        delete: 'Elimina',
        edit: 'Modifica',
        create: 'Crea',
        export: 'Esporta',
        preview: 'Anteprima',
        loading: 'Caricamento...',
        language: 'Lingua',
        theme: 'Tema',
        back: 'Indietro',
        next: 'Avanti',
        finish: 'Finisci',
        download: 'Scarica',
        share: 'Condividi',
        duplicate: 'Duplica',
        template: 'Modello',
        color: 'Colore',
        font: 'Font',
        upload: 'Carica',
        remove: 'Rimuovi',
        add: 'Aggiungi',
        close: 'Chiudi',
        open: 'Apri',
        search: 'Cerca',
        filter: 'Filtra',
        sort: 'Ordina',
        view: 'Visualizza',
        publish: 'Pubblica',
        unpublish: 'Rimuovi pubblicazione',
        draft: 'Bozza',
        published: 'Pubblicato'
      },
      nav: {
        home: 'Home',
        cv: 'Creatore CV',
        portfolio: 'Portfolio',
        templates: 'Modelli',
        pricing: 'Prezzi',
        about: 'Chi siamo',
        contact: 'Contatti',
        help: 'Aiuto',
        documentation: 'Documentazione'
      },
      home: {
        hero: {
          title: 'Crea CV e Portfolio Professionali',
          subtitle: 'Costruisci CV straordinari e portfolio dinamici con la nostra piattaforma AI. Distinguiti con design professionali.',
          cta: 'Inizia Gratis',
          watchDemo: 'Guarda Demo',
          trustedBy: 'Utilizzato da professionisti in tutto il mondo'
        },
        features: {
          title: 'Tutto ciò di cui hai bisogno per mostrare il tuo talento',
          subtitle: 'Strumenti professionali per creare, personalizzare e condividere il tuo lavoro',
          cv: {
            title: 'Creatore CV Intelligente',
            description: 'Scegli tra oltre 15 modelli professionali e personalizza ogni dettaglio con il nostro editor intuitivo'
          },
          portfolio: {
            title: 'Portfolio Dinamici',
            description: 'Crea portfolio animati e responsive con il tuo dominio personalizzato e mostra il tuo lavoro magnificamente'
          },
          multilingual: {
            title: 'Supporto Multilingue',
            description: 'Disponibile in francese, italiano e inglese con traduzione automatica dei contenuti'
          },
          ai: {
            title: 'Alimentato da AI',
            description: 'Suggerimenti intelligenti e funzionalità di riempimento automatico per velocizzare il processo di creazione'
          },
          export: {
            title: 'Esporta Ovunque',
            description: 'Scarica come PDF, condividi con un link o incorpora nel tuo sito web'
          },
          sharing: {
            title: 'Condivisione Facile',
            description: 'Ottieni il tuo dominio personalizzato e condividi il tuo lavoro con il mondo'
          }
        },
        stats: {
          templates: 'Modelli CV',
          portfolios: 'Temi Portfolio',
          languages: 'Lingue',
          users: 'Utenti Soddisfatti'
        },
        testimonials: {
          title: 'Cosa dicono i nostri utenti',
          subtitle: 'Unisciti a migliaia di professionisti che si fidano di PI-Builder'
        },
        cta: {
          title: 'Pronto a costruire la tua presenza professionale?',
          subtitle: 'Unisciti a migliaia di professionisti che usano PI-Builder per mostrare le loro competenze',
          button: 'Inizia Ora'
        }
      },
      auth: {
        loginTitle: 'Bentornato',
        loginSubtitle: 'Accedi al tuo account per continuare',
        signupTitle: 'Crea il tuo account',
        signupSubtitle: 'Unisciti a migliaia di professionisti che usano PI-Builder',
        email: 'Indirizzo email',
        password: 'Password',
        confirmPassword: 'Conferma Password',
        fullName: 'Nome Completo',
        dontHaveAccount: 'Non hai un account?',
        alreadyHaveAccount: 'Hai già un account?',
        forgotPassword: 'Password dimenticata?',
        resetPassword: 'Reimposta Password',
        rememberMe: 'Ricordami',
        termsAccept: 'Accetto i Termini di Servizio e la Privacy Policy',
        emailPlaceholder: 'Inserisci la tua email',
        passwordPlaceholder: 'Inserisci la tua password',
        namePlaceholder: 'Inserisci il tuo nome completo'
      },
      dashboard: {
        title: 'Dashboard',
        welcome: 'Bentornato',
        subtitle: 'Gestisci i tuoi CV e portfolio da qui',
        stats: {
          totalCvs: 'CV Totali',
          portfolios: 'Portfolio',
          views: 'Visualizzazioni Totali',
          downloads: 'Download'
        },
        quickActions: {
          title: 'Azioni Rapide',
          createCv: {
            title: 'Crea Nuovo CV',
            description: 'Scegli tra oltre 15 modelli professionali'
          },
          createPortfolio: {
            title: 'Crea Portfolio',
            description: 'Costruisci un sito web personale straordinario'
          }
        },
        recent: {
          cvs: 'CV Recenti',
          portfolios: 'Portfolio Recenti',
          viewAll: 'Visualizza Tutti',
          noItems: 'Nessun elemento ancora',
          createFirst: 'Crea il tuo primo'
        },
        actions: {
          edit: 'Modifica',
          preview: 'Anteprima',
          download: 'Scarica',
          share: 'Condividi',
          duplicate: 'Duplica',
          delete: 'Elimina',
          publish: 'Pubblica',
          unpublish: 'Rimuovi pubblicazione'
        }
      },
      cv: {
        title: 'Creatore CV',
        subtitle: 'Crea il tuo CV professionale',
        steps: {
          template: 'Scegli Modello',
          content: 'Aggiungi Contenuto',
          customize: 'Personalizza',
          export: 'Esporta'
        },
        sections: {
          personal: 'Informazioni personali',
          experience: 'Esperienza lavorativa',
          education: 'Istruzione',
          skills: 'Competenze',
          languages: 'Lingue',
          hobbies: 'Hobby e Interessi',
          projects: 'Progetti',
          certifications: 'Certificazioni',
          references: 'Referenze'
        },
        fields: {
          firstName: 'Nome',
          lastName: 'Cognome',
          email: 'Email',
          phone: 'Telefono',
          address: 'Indirizzo',
          city: 'Città',
          country: 'Paese',
          website: 'Sito web',
          linkedin: 'LinkedIn',
          github: 'GitHub',
          summary: 'Riassunto professionale',
          jobTitle: 'Titolo lavoro',
          company: 'Azienda',
          startDate: 'Data inizio',
          endDate: 'Data fine',
          current: 'Posizione attuale',
          description: 'Descrizione',
          degree: 'Titolo di studio',
          school: 'Scuola/Università',
          skillName: 'Nome competenza',
          skillLevel: 'Livello competenza',
          languageName: 'Lingua',
          languageLevel: 'Livello padronanza',
          hobbyName: 'Hobby/Interesse',
          projectName: 'Nome progetto',
          projectUrl: 'URL progetto',
          certificationName: 'Certificazione',
          issuer: 'Organizzazione emittente',
          issueDate: 'Data emissione',
          referenceName: 'Nome referenza',
          referenceTitle: 'Titolo',
          referenceCompany: 'Azienda',
          referenceEmail: 'Email',
          referencePhone: 'Telefono'
        },
        templates: {
          modern: 'Moderno',
          classic: 'Classico',
          creative: 'Creativo',
          minimal: 'Minimale',
          professional: 'Professionale',
          elegant: 'Elegante',
          bold: 'Audace',
          simple: 'Semplice'
        },
        customization: {
          colors: 'Colori',
          fonts: 'Font',
          layout: 'Layout',
          spacing: 'Spaziatura',
          photo: 'Foto profilo'
        }
      },
      portfolio: {
        title: 'Creatore Portfolio',
        subtitle: 'Crea il tuo portfolio professionale',
        steps: {
          template: 'Scegli Modello',
          content: 'Aggiungi Contenuto',
          customize: 'Personalizza',
          publish: 'Pubblica'
        },
        sections: {
          hero: 'Sezione Hero',
          about: 'Chi sono',
          services: 'Servizi',
          projects: 'Progetti',
          testimonials: 'Testimonianze',
          contact: 'Contatti',
          blog: 'Blog',
          gallery: 'Galleria'
        },
        templates: {
          creative: 'Creativo',
          business: 'Business',
          minimal: 'Minimale',
          photography: 'Fotografia',
          developer: 'Sviluppatore',
          designer: 'Designer',
          writer: 'Scrittore',
          consultant: 'Consulente'
        },
        fields: {
          heroTitle: 'Titolo Hero',
          heroSubtitle: 'Sottotitolo Hero',
          aboutTitle: 'Titolo Chi sono',
          aboutDescription: 'Descrizione Chi sono',
          serviceName: 'Nome servizio',
          serviceDescription: 'Descrizione servizio',
          projectName: 'Nome progetto',
          projectDescription: 'Descrizione progetto',
          projectUrl: 'URL progetto',
          testimonialText: 'Testo testimonianza',
          testimonialAuthor: 'Nome autore',
          testimonialRole: 'Ruolo autore',
          contactEmail: 'Email contatto',
          contactPhone: 'Telefono contatto',
          contactAddress: 'Indirizzo contatto'
        }
      },
      templates: {
        title: 'Modelli',
        subtitle: 'Scegli dalla nostra collezione di modelli professionali',
        categories: {
          all: 'Tutti i Modelli',
          cv: 'Modelli CV',
          portfolio: 'Modelli Portfolio',
          popular: 'Popolari',
          new: 'Nuovi',
          free: 'Gratuiti',
          premium: 'Premium'
        },
        actions: {
          preview: 'Anteprima',
          use: 'Usa Modello',
          favorite: 'Aggiungi ai Preferiti'
        }
      },
      pricing: {
        title: 'Prezzi semplici e trasparenti',
        subtitle: 'Scegli il piano che funziona meglio per te',
        monthly: 'Mensile',
        yearly: 'Annuale',
        save: 'Risparmia 20%',
        plans: {
          free: {
            name: 'Gratuito',
            price: '0',
            description: 'Perfetto per iniziare',
            features: [
              '3 modelli CV',
              '2 modelli portfolio',
              'Personalizzazione base',
              'Export PDF',
              'Supporto community'
            ]
          },
          pro: {
            name: 'Pro',
            price: '9',
            description: 'Ideale per professionisti',
            features: [
              'Tutti i modelli CV',
              'Tutti i modelli portfolio',
              'Personalizzazione avanzata',
              'Dominio personalizzato',
              'Analytics',
              'Supporto prioritario',
              'Suggerimenti AI'
            ]
          },
          team: {
            name: 'Team',
            price: '29',
            description: 'Perfetto per team',
            features: [
              'Tutto in Pro',
              'Collaborazione team',
              'Gestione brand',
              'Analytics avanzate',
              'Accesso API',
              'Supporto dedicato'
            ]
          }
        },
        cta: 'Inizia',
        popular: 'Più Popolare'
      },
      settings: {
        title: 'Impostazioni',
        subtitle: 'Gestisci le preferenze del tuo account',
        tabs: {
          profile: 'Profilo',
          account: 'Account',
          preferences: 'Preferenze',
          billing: 'Fatturazione',
          security: 'Sicurezza'
        },
        profile: {
          title: 'Informazioni profilo',
          subtitle: 'Aggiorna le tue informazioni personali',
          avatar: 'Foto profilo',
          name: 'Nome completo',
          email: 'Indirizzo email',
          bio: 'Bio',
          website: 'Sito web',
          location: 'Posizione',
          timezone: 'Fuso orario'
        },
        preferences: {
          title: 'Preferenze',
          subtitle: 'Personalizza la tua esperienza',
          language: 'Lingua',
          theme: 'Tema',
          notifications: 'Notifiche',
          emailNotifications: 'Notifiche email',
          pushNotifications: 'Notifiche push'
        }
      },
      footer: {
        description: 'Crea CV e portfolio professionali con facilità',
        links: {
          product: 'Prodotto',
          company: 'Azienda',
          support: 'Supporto',
          legal: 'Legale'
        },
        product: {
          features: 'Funzionalità',
          templates: 'Modelli',
          pricing: 'Prezzi',
          api: 'API'
        },
        company: {
          about: 'Chi siamo',
          careers: 'Carriere',
          blog: 'Blog',
          press: 'Stampa'
        },
        support: {
          help: 'Centro aiuto',
          contact: 'Contattaci',
          status: 'Stato',
          community: 'Community'
        },
        legal: {
          privacy: 'Privacy Policy',
          terms: 'Termini di Servizio',
          cookies: 'Cookie Policy'
        },
        copyright: '© 2024 Progress Intelligent. Tutti i diritti riservati.'
      }
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n