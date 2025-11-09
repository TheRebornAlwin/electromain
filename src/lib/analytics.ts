/**
 * ElectroMain Analytics Event Library
 *
 * Centralized event tracking for Google Tag Manager / Google Analytics 4
 * All events push to window.dataLayer
 *
 * Usage:
 *   import { track } from '@/lib/analytics';
 *   track.estimateChange({ service, urgency, property, low, high });
 */

// Extend Window interface for TypeScript
declare global {
  interface Window {
    dataLayer: any[];
  }
}

// Initialize dataLayer if not present
if (typeof window !== 'undefined' && !window.dataLayer) {
  window.dataLayer = [];
}

// Helper function to push to dataLayer
function pushEvent(eventData: Record<string, any>) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push(eventData);
    console.log('[Analytics]', eventData); // Remove in production
  }
}

// ============================================================================
// EVENT TRACKING FUNCTIONS
// ============================================================================

export const track = {
  /**
   * Estimate interactions
   */
  estimateChange(params: {
    service: string;
    urgency: string;
    property: string;
    low: number;
    high: number;
  }) {
    pushEvent({
      event: 'estimate_change',
      ...params,
    });
  },

  estimateSubmit(params: {
    service: string;
    urgency: string;
    property: string;
    low: number;
    high: number;
    contact_provided?: boolean;
  }) {
    pushEvent({
      event: 'estimate_submit',
      ...params,
    });
  },

  /**
   * CTA clicks
   */
  bookVisitClick(params: {
    location: 'header' | 'estimate_panel' | 'cta_band' | 'service_card' | 'footer';
    label?: string;
  }) {
    pushEvent({
      event: 'book_visit_click',
      ...params,
    });
  },

  ctaBandClick(params: {
    cta: 'book_visit' | 'get_estimate';
  }) {
    pushEvent({
      event: 'cta_band_click',
      ...params,
    });
  },

  /**
   * Service interactions
   */
  serviceCardClick(params: {
    service: string;
    location: 'services_grid' | 'footer' | 'nav';
  }) {
    pushEvent({
      event: 'service_card_click',
      ...params,
    });
  },

  /**
   * FAQ interactions
   */
  faqExpand(params: {
    question_id: string;
    question: string;
  }) {
    pushEvent({
      event: 'faq_expand',
      ...params,
    });
  },

  /**
   * Case study views
   */
  caseStudyView(params: {
    title: string;
    scroll_depth?: number; // percentage
  }) {
    pushEvent({
      event: 'case_study_view',
      ...params,
    });
  },

  /**
   * Form submissions
   */
  formSubmit(params: {
    form_type: 'exact_quote' | 'booking' | 'contact';
    service?: string;
    estimate_range?: string;
    success: boolean;
  }) {
    pushEvent({
      event: 'form_submit',
      ...params,
    });
  },

  formError(params: {
    form_type: string;
    error_field: string;
    error_message: string;
  }) {
    pushEvent({
      event: 'form_error',
      ...params,
    });
  },

  /**
   * Navigation
   */
  navClick(params: {
    label: string;
    destination: string;
  }) {
    pushEvent({
      event: 'nav_click',
      ...params,
    });
  },

  /**
   * Scroll depth tracking
   */
  scrollDepth(params: {
    depth: 25 | 50 | 75 | 100; // percentage milestones
    page: string;
  }) {
    pushEvent({
      event: 'scroll_depth',
      ...params,
    });
  },

  /**
   * Video interactions (if applicable)
   */
  videoPlay(params: {
    video_title: string;
    video_url: string;
  }) {
    pushEvent({
      event: 'video_play',
      ...params,
    });
  },

  videoComplete(params: {
    video_title: string;
    watch_duration: number; // seconds
  }) {
    pushEvent({
      event: 'video_complete',
      ...params,
    });
  },

  /**
   * Outbound link clicks
   */
  outboundClick(params: {
    url: string;
    label?: string;
  }) {
    pushEvent({
      event: 'outbound_click',
      ...params,
    });
  },

  /**
   * Phone call clicks (tel: links)
   */
  phoneClick(params: {
    location: 'header' | 'footer' | 'cta_band';
    phone_number: string;
  }) {
    pushEvent({
      event: 'phone_click',
      ...params,
    });
  },

  /**
   * Email clicks (mailto: links)
   */
  emailClick(params: {
    location: 'header' | 'footer' | 'contact_page';
    email_address: string;
  }) {
    pushEvent({
      event: 'email_click',
      ...params,
    });
  },
};

// ============================================================================
// ENHANCED ECOMMERCE (if needed for future product sales)
// ============================================================================

export const ecommerce = {
  viewItem(params: {
    item_id: string;
    item_name: string;
    price: number;
    currency?: string;
  }) {
    pushEvent({
      event: 'view_item',
      ecommerce: {
        items: [{
          item_id: params.item_id,
          item_name: params.item_name,
          price: params.price,
          currency: params.currency || 'GBP',
        }],
      },
    });
  },

  addToCart(params: {
    item_id: string;
    item_name: string;
    price: number;
    quantity?: number;
  }) {
    pushEvent({
      event: 'add_to_cart',
      ecommerce: {
        items: [{
          item_id: params.item_id,
          item_name: params.item_name,
          price: params.price,
          quantity: params.quantity || 1,
        }],
      },
    });
  },

  purchase(params: {
    transaction_id: string;
    value: number;
    currency?: string;
    items: Array<{
      item_id: string;
      item_name: string;
      price: number;
      quantity: number;
    }>;
  }) {
    pushEvent({
      event: 'purchase',
      ecommerce: {
        transaction_id: params.transaction_id,
        value: params.value,
        currency: params.currency || 'GBP',
        items: params.items,
      },
    });
  },
};

// ============================================================================
// CUSTOM DIMENSIONS (if needed)
// ============================================================================

export function setUserProperties(properties: Record<string, any>) {
  pushEvent({
    event: 'set_user_properties',
    ...properties,
  });
}

// ============================================================================
// PAGE VIEW TRACKING
// ============================================================================

export function trackPageView(params: {
  page_path: string;
  page_title: string;
}) {
  pushEvent({
    event: 'page_view',
    page_path: params.page_path,
    page_title: params.page_title,
  });
}

// ============================================================================
// PERFORMANCE TRACKING
// ============================================================================

export function trackPerformance(params: {
  metric_name: 'LCP' | 'FID' | 'CLS' | 'FCP' | 'TTFB';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
}) {
  pushEvent({
    event: 'web_vitals',
    ...params,
  });
}

// ============================================================================
// ERROR TRACKING
// ============================================================================

export function trackError(params: {
  error_message: string;
  error_stack?: string;
  error_type: 'javascript' | 'network' | 'form' | 'api';
}) {
  pushEvent({
    event: 'error',
    ...params,
  });
}

// ============================================================================
// EXPORTS
// ============================================================================

export default track;
